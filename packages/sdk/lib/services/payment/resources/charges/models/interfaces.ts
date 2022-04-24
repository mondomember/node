export const ChargeStatus = {
  SUCCEEDED: "Succeeded",
  FAILED: "Failed",
  REFUNDED: "Refunded",
  PARTIALLY_REFUNDED: "Partially Refundeded",
} as const;

export type AnyChargeStatus = typeof ChargeStatus[keyof typeof ChargeStatus];

export const ChargeStatusEnum = [
  ChargeStatus.SUCCEEDED,
  ChargeStatus.FAILED,
  ChargeStatus.REFUNDED,
  ChargeStatus.PARTIALLY_REFUNDED,
];
