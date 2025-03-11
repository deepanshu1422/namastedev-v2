export interface UserData {
    client_ip_address: string;
    client_user_agent: string;
    em: string[];
    ph: string[];
    fbc: string;
    fbp: string;
    external_id: string[];
  }
  
  export interface CustomData {
    value: number;
    currency: string;
    content_name?: string;
    order_id?: string;
    status?: string;
    page_location?: string;
    page_title?: string;
    page_path?: string;
    [key: string]: any;
  }
  
  export interface AttributionData {
    attribution_share?: string;
  }
  
  export interface OriginalEventData {
    event_name: string;
    event_time: number;
  }
  
  export interface AdEventData {
    event_name: string;
    event_time: number;
    event_id: string;
    event_source_url: string;
    action_source: string;
    user_data: UserData;
    custom_data: CustomData;
    opt_out: boolean;
    retryCount?: number;
  }
  
  export interface OrderData {
    id: string;
    orderId: string;
    name: string;
    email: string;
    phone: string;
    amount: number;
    amountPayable: number;
    status: string;
    currency?: string;
    event_source_url?: string;
    page_title?: string;
    page_path?: string;
  }
  
  export interface SimpleEventData {
    value: number;
    currency: string;
    email: string;
    content_name: string;
    utmParams?: Record<string, string>;
    fbParams?: Record<string, string>;
  }
  
  export interface AdDataPayload {
    data?: AdEventData[];
    orderData?: OrderData;
    simpleEvent?: SimpleEventData;
  } 