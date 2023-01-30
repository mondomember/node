import { Membership } from "@mondomember/model";

export const ContractStatusEnum = [
  Membership.ContractStatus.UPCOMING,
  Membership.ContractStatus.ACTIVE,
  Membership.ContractStatus.FULFILLED,
  Membership.ContractStatus.CANCELED,
];

export const RenewalFrequencySchemaEnum = [
  Membership.RenewalFrequency.DAILY,
  Membership.RenewalFrequency.WEEKLY,
  Membership.RenewalFrequency.MONTHLY,
  Membership.RenewalFrequency.YEARLY,
];
