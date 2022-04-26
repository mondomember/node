import { UIDPrefix as ModelUIDPrefix } from "../../models";

export const Service = {
  BILLING: "Billing",
  CRM: "CRM",
  MEMBERSHIP: "Membership",
} as const;

export type AnyService = typeof Service[keyof typeof Service];

/**
 * @deprecated Use `AnyService`
 */
export type AnyPropertiesService = AnyService;

export const UIDPrefix = {
  FIELD: ModelUIDPrefix.FIELD,
  FIELD_GROUP: "fdgp",
} as const;
