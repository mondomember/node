import { Payment } from "@mondomember/model";

export const ChargeTypeEnum = [Payment.ChargeType.INVOICE];

export const ChargePaymentTypeEnum = [
  Payment.ChargePaymentType.TOKEN,
  Payment.ChargePaymentType.SOURCE,
];

export const ChargeStatusEnum = [
  Payment.ChargeStatus.PROCESSING,
  Payment.ChargeStatus.SUCCEEDED,
  Payment.ChargeStatus.FAILED,
  Payment.ChargeStatus.CANCELED,
  Payment.ChargeStatus.REFUNDED,
  Payment.ChargeStatus.REQUIRES_ACTION,
  Payment.ChargeStatus.PARTIALLY_REFUNDED,
];
