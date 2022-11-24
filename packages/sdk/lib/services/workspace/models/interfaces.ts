export const MembershipPlan = {
  FREE: "Free",
  ON_DEMAND: "OnDemand",
  BUSINCESS: "Business",
} as const;

export type AnyMembershipPlan =
  typeof MembershipPlan[keyof typeof MembershipPlan];
