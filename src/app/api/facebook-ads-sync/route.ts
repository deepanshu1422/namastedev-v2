import { NextResponse } from 'next/server';
import Mixpanel from 'mixpanel';
import { FacebookAdsApi, AdAccount } from 'facebook-nodejs-business-sdk';

// Initialize Mixpanel with your token and configuration
const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN!;
const MIXPANEL_SECRET = process.env.MIXPANEL_SECRET!;
const FACEBOOK_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN!;
const FACEBOOK_AD_ACCOUNT_ID = process.env.FACEBOOK_AD_ACCOUNT_ID!;

const mixpanelClient = Mixpanel.init(MIXPANEL_TOKEN, {
  secret: MIXPANEL_SECRET
});

// Initialize Facebook Ads API
FacebookAdsApi.init(FACEBOOK_TOKEN);

async function fetchFacebookCampaigns() {
  const account = new AdAccount(`act_${FACEBOOK_AD_ACCOUNT_ID}`);

  return account.getInsights([
    'campaign_id',
    'campaign_name',
    'spend',
    'impressions',
    'clicks'
  ], {
    level: 'campaign',
    date_preset: 'yesterday',
    filtering: [
      {
        field: 'spend',
        operator: 'GREATER_THAN',
        value: 0
      }
    ]
  });
}

function transformCampaignToEvent(campaign: any) {
  return {
    event: 'Ad Data',
    properties: {
      $insert_id: `FB-${campaign.date_start}-${campaign.campaign_id}`,
      time: new Date(campaign.date_start).getTime(),
      source: 'Facebook',
      campaign_id: campaign.campaign_id,
      utm_source: "facebook",
      utm_campaign: campaign.campaign_name,
      cost: campaign.spend,
      impressions: campaign.impressions,
      clicks: campaign.clicks
    }
  };
}

export async function GET() {
  try {
    // Get the campaign metrics
    const campaigns = await fetchFacebookCampaigns();

    // Transform campaigns to Mixpanel events
    const events = campaigns.map(transformCampaignToEvent);

    // Import to Mixpanel
    await new Promise((resolve, reject) => {
      mixpanelClient.import_batch(events, (err: any) => {
        if (err) reject(err);
        resolve(true);
      });
    });

    return NextResponse.json({ 
      success: true, 
      message: `Imported ${events.length} events.` 
    });

  } catch (error) {
    console.error('Error syncing Facebook Ads data:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to sync Facebook Ads data' 
    }, { status: 500 });
  }
}

// Add this new endpoint for testing
export async function POST(request: Request) {
  try {
    const { startDate, endDate } = await request.json();
    
    const account = new AdAccount(`act_${FACEBOOK_AD_ACCOUNT_ID}`);
    
    // Custom date range query
    const campaigns = await account.getInsights([
      'campaign_id',
      'campaign_name',
      'spend',
      'impressions',
      'clicks'
    ], {
      level: 'campaign',
      time_range: {
        'since': startDate || '2024-03-01',
        'until': endDate || '2024-03-20'
      },
      filtering: [
        {
          field: 'spend',
          operator: 'GREATER_THAN',
          value: 0
        }
      ]
    });

    return NextResponse.json({ 
      success: true, 
      data: campaigns,
      message: `Found ${campaigns.length} campaigns` 
    });

  } catch (error) {
    console.error('Error fetching Facebook Ads data:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 