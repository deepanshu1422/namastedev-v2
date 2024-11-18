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

// Initialize Google Ads API client with proper configuration
const client = new GoogleAdsApi({
  client_id: GOOGLE_CLIENT_ID,
  client_secret: GOOGLE_CLIENT_SECRET,
  developer_token: GOOGLE_ADS_DEVELOPER_TOKEN
});

export async function POST(request: Request) {
  try {
    // Log all credentials (masked for security)
    console.log('Credentials Check:', {
      client_id: GOOGLE_CLIENT_ID?.substring(0, 5) + '...',
      client_secret: GOOGLE_CLIENT_SECRET ? 'Set' : 'Missing',
      refresh_token: GOOGLE_CLIENT_REFRESH_TOKEN?.substring(0, 5) + '...',
      developer_token: GOOGLE_ADS_DEVELOPER_TOKEN?.substring(0, 5) + '...',
      customer_id: GOOGLE_ADS_CUSTOMER_ID
    });

    // Validate required credentials
    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_CLIENT_REFRESH_TOKEN || 
        !GOOGLE_ADS_DEVELOPER_TOKEN || !GOOGLE_ADS_CUSTOMER_ID) {
      throw new Error('Missing required Google Ads credentials');
    }

    const { startDate, endDate } = await request.json();
    
    console.log('Creating customer instance...');
    const customer = client.Customer({
      customer_id: GOOGLE_ADS_CUSTOMER_ID.replace(/-/g, ''),
      refresh_token: GOOGLE_CLIENT_REFRESH_TOKEN
    });

    // Basic query to test connection
    const query = `
      SELECT
        campaign.id,
        campaign.name
      FROM campaign
      LIMIT 5
    `;

    console.log('Executing query:', query);
    
    try {
      console.log('Awaiting query response...');
      const campaigns = await customer.query(query);
      console.log('Raw API Response:', JSON.stringify(campaigns, null, 2));

      if (!campaigns) {
        throw new Error('No response from Google Ads API');
      }

      // Transform the data for better readability
      const transformedCampaigns = Array.isArray(campaigns) ? campaigns.map(campaign => {
        console.log('Processing campaign raw data:', JSON.stringify(campaign, null, 2));
        return {
          campaignId: campaign.campaign?.id,
          campaignName: campaign.campaign?.name
        };
      }) : [];

      return NextResponse.json({ 
        success: true, 
        data: transformedCampaigns,
        message: `Found ${transformedCampaigns.length} campaigns`,
        query: query,
        rawResponse: campaigns
      });

    } catch (queryError: any) {
      // Log the complete error object
      console.error('Complete error object:', queryError);
      
      // Log specific error properties
      console.error('Query execution error:', {
        message: queryError.message,
        name: queryError.name,
        stack: queryError.stack,
        response: queryError.response,
        details: queryError.details,
        raw: JSON.stringify(queryError, null, 2)
      });
      
      return NextResponse.json({ 
        success: false,
        error: 'Google Ads API Query Error',
        details: {
          message: queryError.message || 'Unknown error',
          code: queryError.code,
          response: queryError.response,
          details: queryError.details,
          raw: JSON.stringify(queryError, null, 2)
        }
      }, { status: 500 });
    }

  } catch (error: any) {
    console.error('Detailed error:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
      response: error.response?.data,
      status: error.response?.status,
      raw: JSON.stringify(error, null, 2)
    });

    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Unknown error',
      details: {
        name: error.name,
        message: error.message,
        response: error.response?.data || error.response,
        status: error.response?.status,
        raw: JSON.stringify(error, null, 2)
      }
    }, { status: 500 });
  }
} 