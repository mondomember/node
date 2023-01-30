export const MembershipStatus = {
  ACTIVE: "Active",
  CANCELED: "Canceled",
  LAPSED: "Lapsed",
  PENDING: "Pending",
} as const;

export type AnyMembershipStatus =
  typeof MembershipStatus[keyof typeof MembershipStatus];
