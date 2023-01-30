export const ChargeType = {
  INVOICE: "Invoice",
} as const;

export type AnyChargeType = typeof ChargeType[keyof typeof ChargeType];

export const ChargePaymentType = {
  TOKEN: "Token",
  SOURCE: "Source",
} as const;

export type AnyChargePaymentType =
  typeof ChargePaymentType[keyof typeof ChargePaymentType];

export const ChargeStatus = {
  PROCESSING: "Processing",
  SUCCEEDED: "Succeeded",
  FAILED: "Failed",
  CANCELED: "Canceled",
  REFUNDED: "Refunded",
  REQUIRES_ACTION: "RequiresAction",
  PARTIALLY_REFUNDED: "Partially Refundeded",
} as const;

export type AnyChargeStatus = typeof ChargeStatus[keyof typeof ChargeStatus];
