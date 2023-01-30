import { AnyPaymentProvider } from "../interfaces";

import {
  AnyChargeType,
  ChargePaymentType,
  AnyChargeStatus,
} from "./interfaces";

export interface StatusProperty {
  status: AnyChargeStatus;
}

export interface TypeProperty {
  type: AnyChargeType;
}

export interface SaveSourceProperty {
  saveSource: boolean;
}

interface SourcePayment {
  type: typeof ChargePaymentType.SOURCE;
  id: string;
}

interface TokenPaymentRequest extends SaveSourceProperty {
  type: typeof ChargePaymentType.TOKEN;
  token: string;
}

interface TokenPaymentResponse {
  type: typeof ChargePaymentType.TOKEN;
  token: string;
}

export interface PaymentResponseProperty {
  payment: SourcePayment | TokenPaymentResponse;
}

export interface PaymentRequestProperty {
  payment: SourcePayment | TokenPaymentRequest;
}

export interface RefundableAmountProperty {
  refundableAmount: number;
}

export interface AmountProperty {
  amount: number;
}

export interface InvoiceProperty {
  invoice: string;
}

export interface ReferenceProperty {
  reference: string;
}

export interface GatewayProperty {
  gateway: {
    id: string;
    provider: AnyPaymentProvider;
  };
}
