import Stripe from "stripe";

export const StripeSourceType = {
  CARD: "card",
  US_BANK_ACCOUNT: "us_bank_account",
} as const;

export type AnyStripeSourceType =
  typeof StripeSourceType[keyof typeof StripeSourceType];

export interface StripeSourceObject extends Stripe.PaymentMethod {}
