import { GatewayResponseItem } from "../../payment";
import {
  AnyInvoiceStatus,
  InvoicePaymentMethodType,
  AnyInvoicePaymentMethodType,
  InvoicePaymentReceiptType,
  InvoiceLineItemType,
  InvoiceAutoPayType,
  InvoicePaymentStatus,
} from "./interfaces";

export interface StatusProperty {
  status: AnyInvoiceStatus;
}

export interface ContractProperty {
  contract: string;
}

export interface ContactsProperty {
  contacts:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ];
}

export interface MembershipsProperty {
  memberships: string[];
}

export interface DiscountProperty {
  discount: {
    amount: number;
    description?: string;
  };
}

export interface DueAtProperty {
  dueAt: string;
}

export interface AdjustmentsTotalProperty {
  adjustmentsTotal: number;
}

export interface LinesTotalProperty {
  linesTotal: number;
}

export interface PayableTotalProperty {
  payableTotal: number;
}

export interface AdjustedTotalProperty {
  adjustedTotal: number;
}

export interface CustomerProperty {
  customer: {
    id: string;
  };
}

export interface GatewayProperty {
  gateway:
    | {
        id: string;
      }
    | GatewayResponseItem;
}

export interface PaymentIntentProperty {
  paymentIntent: AnyInvoicePaymentMethodType;
}

interface AutoPayFinalized {
  type: typeof InvoiceAutoPayType.FINALIZED;
  source?: string; // The payment source Id
}

export type RequestAutoPayProperty = {
  autoPay: AutoPayFinalized | null;
};

export type ResponseAutoPayProperty = {
  autoPay: AutoPayFinalized;
};

interface InvoicePaymentMethodOfflineResponse {
  type:
    | typeof InvoicePaymentMethodType.CASH
    | typeof InvoicePaymentMethodType.CHECK
    | typeof InvoicePaymentMethodType.WIRE;
  reference?: string;
}

interface InvoicePaymentMethodOnlineResponse {
  type: typeof InvoicePaymentMethodType.SOURCE;
  id: string;
}

type InvoicePaymentMethodResponse =
  | InvoicePaymentMethodOfflineResponse
  | InvoicePaymentMethodOnlineResponse;

interface InvoicePaymentReceiptManualResponse {
  type: typeof InvoicePaymentReceiptType.MANUAL;
}

interface InvoicePaymentReceiptChargeResponse {
  type: typeof InvoicePaymentReceiptType.CHARGE;
  id: string;
  reference: string;
}

type InvoicePaymentReceiptResponse =
  | InvoicePaymentReceiptManualResponse
  | InvoicePaymentReceiptChargeResponse;

interface SuccessfulInvoicePaymentResponse {
  status: typeof InvoicePaymentStatus.SUCCCESSFUL;
  method: InvoicePaymentMethodResponse;
  paidAt: string;
  lastActivityAt: string;
  receipt: InvoicePaymentReceiptResponse;
  notes?: string;
}

interface IncompleteInvoicePaymentResponse {
  status:
    | typeof InvoicePaymentStatus.FAILED
    | typeof InvoicePaymentStatus.PENDING;
  method: InvoicePaymentMethodResponse;
  lastActivityAt: string;
  notes?: string;
}

export type InvoicePaymentResponse =
  | SuccessfulInvoicePaymentResponse
  | IncompleteInvoicePaymentResponse;

export interface PaymentPropertyResponse {
  payment: InvoicePaymentResponse;
}

interface ProductRequest {
  id: string;
  tier: {
    id: string;
    price: {
      version: number;
    };
  };
}

type CustomLineItemRequest = {
  type: typeof InvoiceLineItemType.CUSTOM;
  label: string;
  description?: string;
  quantity?: number;
  amount: number;
};

type ProductLineItemRequest = {
  type: typeof InvoiceLineItemType.PRODUCT;
  product: ProductRequest;
  label?: string;
  description?: string;
  quantity?: number;
  amount?: number;
};

export type InvoiceLineItemRequest =
  | CustomLineItemRequest
  | ProductLineItemRequest;

interface ProductResponse {
  id: string;
  label: string;
  tier: {
    id: string;
    label: string;
    price: {
      version: number;
      amount: number;
    };
  };
}

type CustomLineItemResponse = {
  type: typeof InvoiceLineItemType.CUSTOM;
  label: string;
  description?: string;
  quantity: number;
  amount: number;
};

type ProductLineItemResponse = {
  type: typeof InvoiceLineItemType.PRODUCT;
  product: ProductResponse;
  label: string;
  description?: string;
  quantity: number;
  amount: number;
};

export type InvoiceLineItemResponse =
  | CustomLineItemResponse
  | ProductLineItemResponse;

export interface LineItemsRequestProperty {
  lines: InvoiceLineItemRequest[];
}

export interface LineItemsResponseProperty {
  lines: InvoiceLineItemResponse[];
}
