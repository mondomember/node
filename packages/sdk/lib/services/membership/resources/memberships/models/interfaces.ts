export const MembershipStatus = {
  ACTIVE: "Active",
  CANCELED: "Canceled",
  LAPSED: "Lapsed",
  PENDING: "Pending",
} as const;

export type AnyMembershipStatus =
  typeof MembershipStatus[keyof typeof MembershipStatus];

export const MembershipStatusEnum = [
  MembershipStatus.ACTIVE,
  MembershipStatus.CANCELED,
  MembershipStatus.LAPSED,
  MembershipStatus.PENDING,
];
