export interface VisitPayload {
  uuid?: string;
  url?: string;
  landingId?: number;
  ip?: string;
  userAgent?: string;
}
export interface SignUpPayload extends VisitPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}
export type IpResponse = {
  ip: string;
};
export interface TrackingParams {
  utm_source: string;
  utm_source_platform: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  keywordid: string;
  placementid: string;
  networkid: string;
  publisher: string;
  preview: string;
}
export interface PriceData {
  trialPrice?: string;
  price?: string;
}
export interface PriceDataContextType {
  priceData: PriceData;
  setPriceData: (data: PriceData) => void;
}
