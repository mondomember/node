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

export const ContractStatusEnum = [
  ContractStatus.UPCOMING,
  ContractStatus.ACTIVE,
  ContractStatus.FULFILLED,
  ContractStatus.CANCELED,
];

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

export const RenewalFrequencySchemaEnum = [
  RenewalFrequency.DAILY,
  RenewalFrequency.WEEKLY,
  RenewalFrequency.MONTHLY,
  RenewalFrequency.YEARLY,
];

export const ContractBillingTermType = {
  FINALIZED: "Finalized",
  APPROVED: "Approved",
  OFFSET: "Offset",
  SCHEDULED: "Scheduled",
} as const;

export type AnyContractBillingTermType =
  typeof ContractBillingTermType[keyof typeof ContractBillingTermType];

export const ContractRecurringAutoPayType = {
  FINALIZED: "Finalized",
} as const;

export type AnyContractRecurringAutoPayType =
  typeof ContractRecurringAutoPayType[keyof typeof ContractRecurringAutoPayType];

interface LineItemProductRequestPropertyInterface {
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

interface ContractLineItemProductRequestInterface
  extends LineItemProductRequestPropertyInterface {
  type: typeof ContractLineItemType.PRODUCT;
  membership?: string;
  label?: string;
  description?: string;
  quantity?: number;
  amount?: number;
}

export type ContractLineItemRequestInterface =
  ContractLineItemProductRequestInterface;

interface LineItemProductResponsePropertyInterface {
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

export interface ContractLineItemProductResponseInterface
  extends LineItemProductResponsePropertyInterface {
  type: typeof ContractLineItemType.PRODUCT;
  membership?: string;
  quantity: number;
  label: string;
  description?: string;
  amount: number;
}

export type ContractLineItemResponseInterface =
  ContractLineItemProductResponseInterface;
