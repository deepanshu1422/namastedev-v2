import { NextResponse } from 'next/server';
import Mixpanel from 'mixpanel';
import { FacebookAdsApi, AdAccount } from 'facebook-nodejs-business-sdk';

// Initialize Mixpanel with your token and configuration
const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN!;
const MIXPANEL_SECRET = process.env.MIXPANEL_SECRET!;
const FACEBOOK_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN!;
const FACEBOOK_AD_ACCOUNT_ID = process.env.FACEBOOK_AD_ACCOUNT_ID!;

const mixpanelClient = Mixpanel.init(MIXPANEL_TOKEN, {
  secret: MIXPANEL_SECRET,
  host: process.env.MIXPANEL_HOST || 'api.mixpanel.com'
});

// Initialize Facebook Ads API
FacebookAdsApi.init(FACEBOOK_TOKEN);

function generateInsertId(campaignId: string, date: string) {
  return `FB_${campaignId}_${date}`;
}

function getLast7Days() {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i - 1); // -1 to exclude today as data might not be complete
    dates.push(date.toISOString().split('T')[0]);
  }
  return {
    startDate: dates[dates.length - 1],
    endDate: dates[0]
  };
}

function transformCampaignToEvent(campaign: any, date: string) {
  const {
    campaign_id,
    campaign_name,
    spend,
    impressions,
    clicks,
    ctr,
    cpc,
    cpm,
    reach,
    frequency,
    objective,
    ...otherMetrics
  } = campaign._data || campaign;

  // Calculate additional metrics
  const calculatedCTR = impressions > 0 ? (Number(clicks) / Number(impressions)) * 100 : 0;
  const calculatedCPC = clicks > 0 ? Number(spend) / Number(clicks) : 0;
  const calculatedCPM = impressions > 0 ? (Number(spend) / Number(impressions)) * 1000 : 0;

  const insertId = generateInsertId(campaign_id, date);

  console.log('Processing campaign for date:', date, {
    id: campaign_id,
    name: campaign_name,
    insert_id: insertId,
    metrics: { spend, impressions, clicks }
  });

  return {
    event: 'Facebook Ad Campaign Daily Performance',
    properties: {
      $insert_id: insertId,
      distinct_id: `fb_campaign_${campaign_id}`,
      time: new Date(date).getTime(),
      
      // Source information
      source: 'Facebook Ads',
      platform: 'Facebook',
      ad_account_id: FACEBOOK_AD_ACCOUNT_ID,
      
      // Campaign information
      campaign_id,
      campaign_name,
      campaign_objective: objective,
      
      // Date information
      date,
      day_of_week: new Date(date).toLocaleDateString('en-US', { weekday: 'long' }),
      month: new Date(date).toLocaleDateString('en-US', { month: 'long' }),
      year: new Date(date).getFullYear(),
      
      // Core metrics (as numbers)
      spend: Number(spend),
      impressions: Number(impressions),
      clicks: Number(clicks),
      reach: Number(reach),
      frequency: Number(frequency),
      
      // Facebook-provided metrics
      reported_ctr: Number(ctr),
      reported_cpc: Number(cpc),
      reported_cpm: Number(cpm),
      
      // Calculated metrics
      calculated_ctr: calculatedCTR.toFixed(4),
      calculated_cpc: calculatedCPC.toFixed(4),
      calculated_cpm: calculatedCPM.toFixed(4),
      
      // Additional metadata
      currency: 'INR',
      last_updated: new Date().toISOString(),
      is_automated_sync: true,
      
      ...otherMetrics
    }
  };
}

export async function POST(request: Request) {
  try {
    // Check if it's a cron job request
    const isCronJob = request.headers.get('Authorization') === `Bearer ${process.env.CRON_SECRET_TOKEN}`;
    
    // Get date range - use last 7 days for cron job
    let dateRange;
    if (isCronJob) {
      dateRange = getLast7Days();
      console.log('Cron job running for date range:', dateRange);
    } else {
      dateRange = await request.json();
    }
    
    const { startDate, endDate } = dateRange;
    const account = new AdAccount(`act_${FACEBOOK_AD_ACCOUNT_ID}`);
    
    // Get array of dates to process
    const getDatesArray = (start: string, end: string) => {
      const dates = [];
      const current = new Date(start);
      const endDate = new Date(end);
      
      while (current <= endDate) {
        dates.push(current.toISOString().split('T')[0]);
        current.setDate(current.getDate() + 1);
      }
      
      return dates;
    };

    const dates = getDatesArray(startDate, endDate);
    const allEvents = [];

    // Fetch data for each day
    for (const date of dates) {
      console.log(`Fetching data for date: ${date}`);
      
      const campaigns = await account.getInsights([
        'campaign_id',
        'campaign_name',
        'spend',
        'impressions',
        'clicks',
        'objective',
        'ctr',
        'cpc',
        'cpm',
        'reach',
        'frequency',
        'quality_ranking',
        'conversion_rate_ranking',
        'engagement_rate_ranking',
        'website_ctr',
        'cost_per_inline_link_click',
        'cost_per_inline_post_engagement',
        'inline_link_clicks',
        'inline_post_engagement'
      ], {
        level: 'campaign',
        time_range: {
          'since': date,
          'until': date
        },
        filtering: [
          {
            field: 'spend',
            operator: 'GREATER_THAN',
            value: 0
          }
        ]
      });

      console.log(`Retrieved ${campaigns.length} campaigns for ${date}`);

      const dateEvents = campaigns.map(campaign => transformCampaignToEvent(campaign, date));
      allEvents.push(...dateEvents);
    }

    console.log(`Sending ${allEvents.length} events to Mixpanel`);

    // Send to Mixpanel in batches of 50 to avoid rate limits
    const batchSize = 50;
    for (let i = 0; i < allEvents.length; i += batchSize) {
      const batch = allEvents.slice(i, i + batchSize);
      try {
        await new Promise((resolve, reject) => {
          mixpanelClient.import_batch(batch, (err: any) => {
            if (err) {
              console.error('Mixpanel import error:', err);
              reject(err);
            } else {
              console.log(`Successfully sent batch ${i/batchSize + 1} to Mixpanel`);
              resolve(true);
            }
          });
        });
      } catch (error) {
        console.error(`Failed to send batch ${i/batchSize + 1}:`, error);
      }
    }

    return NextResponse.json({ 
      success: true, 
      data: allEvents,
      message: `Processed ${allEvents.length} daily campaign records`,
      summary: {
        dates_processed: dates.length,
        date_range: {
          start: dates[0],
          end: dates[dates.length - 1]
        },
        total_spend: allEvents.reduce((sum, e) => sum + e.properties.spend, 0),
        total_impressions: allEvents.reduce((sum, e) => sum + e.properties.impressions, 0),
        total_clicks: allEvents.reduce((sum, e) => sum + e.properties.clicks, 0),
        is_cron_job: isCronJob,
        events_by_insert_id: allEvents.map(e => ({
          insert_id: e.properties.$insert_id,
          campaign_id: e.properties.campaign_id,
          date: e.properties.date
        }))
      }
    });

  } catch (error: any) {
    console.error('Error processing Facebook Ads data:', {
      message: error.message,
      response: error.response?.data,
      stack: error.stack
    });
    
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      details: {
        name: error.name,
        message: error.message,
        response: error.response?.data,
        stack: error.stack
      }
    }, { status: 500 });
  }
} 