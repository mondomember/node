import { Billing } from "@mondomember/model";

export const InvoiceStatusEnum = [
  Billing.InvoiceStatus.DRAFT,
  Billing.InvoiceStatus.OPEN,
  Billing.InvoiceStatus.PAID,
  Billing.InvoiceStatus.PROCESSING,
  Billing.InvoiceStatus.VOID,
  Billing.InvoiceStatus.PAST_DUE,
];

export const InvoicePaymentMethodEnum = [
  Billing.InvoicePaymentMethodType.CHECK,
  Billing.InvoicePaymentMethodType.CASH,
  Billing.InvoicePaymentMethodType.SOURCE,
  Billing.InvoicePaymentMethodType.TOKEN,
  Billing.InvoicePaymentMethodType.WIRE,
];

export const InvoicePaymentReceiptEnum = [
  Billing.InvoicePaymentReceiptType.MANUAL,
  Billing.InvoicePaymentReceiptType.CHARGE,
];
