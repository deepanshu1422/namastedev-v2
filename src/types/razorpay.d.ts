declare module 'razorpay' {
  export interface RazorpayOptions {
    key_id: string;
    key_secret: string;
  }

  export interface OrderOptions {
    amount: number;
    currency: string;
    receipt?: string;
    notes?: Record<string, string>;
    payment_capture?: boolean;
  }

  export interface Order {
    id: string;
    entity: string;
    amount: number;
    amount_paid: number;
    amount_due: number;
    currency: string;
    receipt: string;
    status: string;
    attempts: number;
    notes: Record<string, string>;
    created_at: number;
  }

  export interface Orders {
    create(options: OrderOptions): Promise<Order>;
    fetch(orderId: string): Promise<Order>;
    all(options?: Record<string, any>): Promise<{ items: Order[] }>;
  }

  export interface Payments {
    capture(paymentId: string, amount: number, currency: string): Promise<any>;
    fetch(paymentId: string): Promise<any>;
    all(options?: Record<string, any>): Promise<{ items: any[] }>;
  }

  export default class Razorpay {
    constructor(options: RazorpayOptions);
    orders: Orders;
    payments: Payments;
  }
}

interface Window {
  Razorpay: any;
} 