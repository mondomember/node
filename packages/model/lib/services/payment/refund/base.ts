import { AnyRefundStatus } from "./interfaces";
import { AnyPaymentProvider } from "../interfaces";

export interface StatusProperty {
  status: AnyRefundStatus;
}

export interface AmountProperty {
  amount: number;
}

export interface ChargeProperty {
  charge: string;
}

export interface GatewayProperty {
  gateway: {
    id: string;
    provider: AnyPaymentProvider;
  };
}
