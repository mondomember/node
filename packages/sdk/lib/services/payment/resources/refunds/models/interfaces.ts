import { Payment } from "@mondomember/model";

export const RefundStatusEnum = [
  Payment.RefundStatus.PROCESSING,
  Payment.RefundStatus.SUCCEEDED,
  Payment.RefundStatus.FAILED,
];
