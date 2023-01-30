export const Service = {
  BILLING: "Billing",
  CRM: "CRM",
  MEMBERSHIP: "Membership",
} as const;

export type AnyService = typeof Service[keyof typeof Service];

export const Resource = {
  BILLING_INVOICE: `${Service.BILLING}.Invoice`,
  CRM_COMPANY: `${Service.CRM}.Company`,
  CRM_CONTACT: `${Service.CRM}.Contact`,
  CRM_COMPANY_CONTACT: `${Service.CRM}.Company-Contact`,
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
