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