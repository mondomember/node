import {
  ContractStatus,
  ContractBillingTermType,
  AnyContractAutoPayType,
  AnyRenewalFrequency,
  ContractLineItemRequest,
  ContractLineItemResponse,
} from "./interfaces";

export interface ContractParentProperty {
  parent: string;
}

export interface ContractChildProperty {
  child: string;
}

export interface InvoiceProperty {
  invoice: string;
}

export interface StatusProperty {
  status:
    | typeof ContractStatus.DRAFT
    | typeof ContractStatus.PENDING
    | typeof ContractStatus.UPCOMING
    | typeof ContractStatus.ACTIVE
    | typeof ContractStatus.FULFILLED
    | typeof ContractStatus.CANCELED;
}

export interface PeriodProperty {
  period: {
    startAt: string;
    endAt: string;
  };
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

export interface CustomerProperty {
  customer: {
    id: string;
  };
}

interface AutoPay {
  type: AnyContractAutoPayType;
  source?: string; // The payment source Id
}

interface AutoPayProperty {
  autoPay: AutoPay;
}

interface FinalizedBilling extends Partial<AutoPayProperty> {
  type: typeof ContractBillingTermType.FINALIZED;
}

interface ApprovedBilling extends Partial<AutoPayProperty> {
  type: typeof ContractBillingTermType.APPROVED;
}

interface OffsetBilling extends Partial<AutoPayProperty> {
  type: typeof ContractBillingTermType.OFFSET;
  seconds: number;
}

interface ScheduledBilling extends Partial<AutoPayProperty> {
  type: typeof ContractBillingTermType.SCHEDULED;
  date: string;
}

export type Billing =
  | FinalizedBilling
  | ApprovedBilling
  | OffsetBilling
  | ScheduledBilling;

export interface ResponseBillingProperty {
  billing: Billing;
}
export interface RequestBillingProperty {
  billing: Billing | null;
}

interface Recurring extends Partial<AutoPayProperty> {
  frequency: AnyRenewalFrequency;
  terms: number;
  offset?: number;
}

export interface RequestRecurringProperty {
  recurring: Recurring | null;
}

export interface ResponseRecurringProperty {
  recurring: Recurring;
}

export interface LineItemsRequestProperty {
  lines: ContractLineItemRequest[];
}

export interface LineItemsResponseProperty {
  lines: ContractLineItemResponse[];
}
