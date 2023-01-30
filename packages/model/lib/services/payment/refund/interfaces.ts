export const RefundStatus = {
  PROCESSING: "Processing",
  SUCCEEDED: "Succeeded",
  FAILED: "Failed",
} as const;

export type AnyRefundStatus = typeof RefundStatus[keyof typeof RefundStatus];
