import { NextResponse } from 'next/server';
import Mixpanel from 'mixpanel';
import { GoogleAdsApi } from 'google-ads-api';

// Initialize Mixpanel with your token and configuration
const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN!;
const MIXPANEL_SECRET = process.env.MIXPANEL_SECRET!;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_ADS_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_ADS_CLIENT_SECRET!;
const GOOGLE_CLIENT_REFRESH_TOKEN = process.env.GOOGLE_ADS_REFRESH_TOKEN!;
const GOOGLE_ADS_DEVELOPER_TOKEN = process.env.GOOGLE_ADS_DEVELOPER_TOKEN!;
const GOOGLE_ADS_CUSTOMER_ID = process.env.GOOGLE_ADS_CUSTOMER_ID!;

const mixpanelClient = Mixpanel.init(MIXPANEL_TOKEN, {
  secret: MIXPANEL_SECRET
});

const client = new GoogleAdsApi({
  client_id: GOOGLE_CLIENT_ID,
  client_secret: GOOGLE_CLIENT_SECRET,
  developer_token: GOOGLE_ADS_DEVELOPER_TOKEN
});

async function fetchGoogleAdsCampaigns() {
  const customer = client.Customer({
    customer_id: GOOGLE_ADS_CUSTOMER_ID,
    refresh_token: GOOGLE_CLIENT_REFRESH_TOKEN
  });

  // Find metrics for all Google Ads campaigns that ran yesterday
  return customer.query(`
    SELECT
      segments.date,
      campaign.id,
      campaign.name,
      metrics.cost_micros,
      metrics.clicks,
      metrics.impressions
    FROM
      campaign
    WHERE
      metrics.cost_micros > 0
    AND
      segments.date DURING YESTERDAY
  `);
}

function transformCampaignToEvent(campaign: any) {
  return {
    event: 'Ad Data',
    properties: {
      $insert_id: `G-${campaign.segments.date}-${campaign.campaign.id}`,
      time: new Date(campaign.segments.date).getTime(),
      source: 'Google',
      campaign_id: campaign.campaign.id,
      utm_source: "google",
      utm_campaign: campaign.campaign.name,
      cost: campaign.metrics.cost_micros / 1_000_000,
      impressions: campaign.metrics.impressions,
      clicks: campaign.metrics.clicks
    }
  };
}

export async function GET() {
  try {
    // Get the campaign metrics
    const campaigns = await fetchGoogleAdsCampaigns();

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
    console.error('Error syncing Google Ads data:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to sync Google Ads data' 
    }, { status: 500 });
  }
} 