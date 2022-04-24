export const Provider = {
  STRIPE: "Stripe",
} as const;

export type AnyPaymentProvider = typeof Provider[keyof typeof Provider];

export const ProviderEnum = [Provider.STRIPE];
