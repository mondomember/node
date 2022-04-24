export const AuthType = {
  BASIC: "Basic",
} as const;

export type AnyAuthType = typeof AuthType[keyof typeof AuthType];

export const SubscriptionStatus = {
  ENABLED: "Enabled",
  DISABLED: "Disabled",
} as const;

export type AnySubscriptionStatus =
  typeof SubscriptionStatus[keyof typeof SubscriptionStatus];

export const SubscriptionStatusEnum = [
  SubscriptionStatus.ENABLED,
  SubscriptionStatus.DISABLED,
];
