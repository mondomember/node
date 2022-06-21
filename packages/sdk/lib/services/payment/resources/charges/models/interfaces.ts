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

export const ChargeStatusEnum = [
  ChargeStatus.PROCESSING,
  ChargeStatus.SUCCEEDED,
  ChargeStatus.FAILED,
  ChargeStatus.CANCELED,
  ChargeStatus.REFUNDED,
  ChargeStatus.REQUIRES_ACTION,
  ChargeStatus.PARTIALLY_REFUNDED,
];
