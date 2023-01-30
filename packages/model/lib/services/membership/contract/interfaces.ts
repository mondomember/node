export const ContractStatus = {
  // Draft (WIP)
  DRAFT: "Draft",

  // Finalized (but pending customer approval/payment)
  PENDING: "Pending",

  // Approved (based on period dates)
  UPCOMING: "Upcoming",
  ACTIVE: "Active",
  FULFILLED: "Fulfilled",
  CANCELED: "Canceled",
} as const;

export type AnyContractStatus =
  typeof ContractStatus[keyof typeof ContractStatus];

export const ContractLineItemType = {
  CUSTOM: "Custom",
  PRODUCT: "Product",
} as const;

export type AnyIContractLineItemType =
  typeof ContractLineItemType[keyof typeof ContractLineItemType];

export const RenewalFrequency = {
  DAILY: "Daily",
  WEEKLY: "Weekly",
  MONTHLY: "Monthly",
  YEARLY: "Yearly",
} as const;

export type AnyRenewalFrequency =
  typeof RenewalFrequency[keyof typeof RenewalFrequency];

export const ContractBillingTermType = {
  FINALIZED: "Finalized",
  APPROVED: "Approved",
  OFFSET: "Offset",
  SCHEDULED: "Scheduled",
} as const;

export type AnyContractBillingTermType =
  typeof ContractBillingTermType[keyof typeof ContractBillingTermType];

export const ContractAutoPayType = {
  FINALIZED: "Finalized",
} as const;

export type AnyContractAutoPayType =
  typeof ContractAutoPayType[keyof typeof ContractAutoPayType];

interface LineItemProductRequestProperty {
  product: {
    id: string;
    tier: {
      id: string;
      price: {
        version: number;
      };
    };
  };
}

interface ContractLineItemProductRequest
  extends LineItemProductRequestProperty {
  type: typeof ContractLineItemType.PRODUCT;
  membership?: string;
  label?: string;
  description?: string;
  quantity?: number;
  amount?: number;
}

export type ContractLineItemRequest = ContractLineItemProductRequest;

interface LineItemProductResponseProperty {
  product: {
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
  };
}

export interface ContractLineItemProductResponse
  extends LineItemProductResponseProperty {
  type: typeof ContractLineItemType.PRODUCT;
  membership?: string;
  quantity: number;
  label: string;
  description?: string;
  amount: number;
}

export type ContractLineItemResponse = ContractLineItemProductResponse;
