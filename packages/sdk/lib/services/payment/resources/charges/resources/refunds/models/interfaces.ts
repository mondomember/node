export const RefundStatus = {
  SUCCEEDED: "Succeeded",
  FAILED: "Failed",
} as const;

export type AnyRefundStatus = typeof RefundStatus[keyof typeof RefundStatus];

export const RefundStatusEnum = [RefundStatus.SUCCEEDED, RefundStatus.FAILED];
