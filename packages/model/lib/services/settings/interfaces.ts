export const Service = {
  BILLING: "Billing",
  CUSTOMER: "Customer",
  MEMBERSHIP: "Membership",
} as const;

export type AnyService = typeof Service[keyof typeof Service];

export const Resource = {
  BILLING_INVOICE: `${Service.BILLING}.Invoice`,
  CUSTOMER_COMPANY: `${Service.CUSTOMER}.Company`,
  CUSTOMER_CONTACT: `${Service.CUSTOMER}.Contact`,
  CUSTOMER_COMPANY_CONTACT: `${Service.CUSTOMER}.Company-Contact`,
  MEMBERSHIP_CONTRACT: `${Service.MEMBERSHIP}.Contract`,
  MEMBERSHIP_MEMBERSHIP: `${Service.MEMBERSHIP}.Membership`,
} as const;

export type AnyResource = typeof Resource[keyof typeof Resource];

import { FieldGroupResponseItem, FieldResponseItem } from "./properties";

interface FieldGroupWithFields extends FieldGroupResponseItem {
  fields: FieldResponseItem[];
}

export interface FieldGroups {
  groups?: FieldGroupWithFields[];
}
