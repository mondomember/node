import { UIDPrefix as ModelUIDPrefix } from "../../models";

export const Service = {
  BILLING: "Billing",
  CRM: "CRM",
  MEMBERSHIP: "Membership",
} as const;

export type AnyPropertiesService = typeof Service[keyof typeof Service];

export const UIDPrefix = {
  FIELD: ModelUIDPrefix.FIELD,
  FIELD_GROUP: "fdgp",
} as const;
