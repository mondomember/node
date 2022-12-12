export const InvoiceStatus = {
  DRAFT: "Draft",
  OPEN: "Open", // Finalized
  PROCESSING: "Processing",
  PAID: "Paid",
  VOID: "Void",
  PAST_DUE: "Past Due",
} as const;

export type AnyInvoiceStatus = typeof InvoiceStatus[keyof typeof InvoiceStatus];

export const InvoiceStatusEnum = [
  InvoiceStatus.DRAFT,
  InvoiceStatus.OPEN,
  InvoiceStatus.PAID,
  InvoiceStatus.PROCESSING,
  InvoiceStatus.VOID,
  InvoiceStatus.PAST_DUE,
];

export const InvoicePaymentStatus = {
  PENDING: "Pending",
  SUCCCESSFUL: "Successful",
  FAILED: "Failed",
} as const;

export type AnyInvoicePaymentStatus =
  typeof InvoicePaymentStatus[keyof typeof InvoicePaymentStatus];

export const InvoicePaymentMethodType = {
  CHECK: "Check",
  CASH: "Cash",
  SOURCE: "Source",
  WIRE: "Wire",
} as const;

export type AnyInvoicePaymentMethodType =
  typeof InvoicePaymentMethodType[keyof typeof InvoicePaymentMethodType];

export const InvoicePaymentMethodEnum = [
  InvoicePaymentMethodType.CHECK,
  InvoicePaymentMethodType.CASH,
  InvoicePaymentMethodType.SOURCE,
  InvoicePaymentMethodType.WIRE,
];

export const InvoicePaymentReceiptType = {
  MANUAL: "Manual",
  CHARGE: "Charge",
} as const;

export type AnyInvoicePaymentReceiptType =
  typeof InvoicePaymentReceiptType[keyof typeof InvoicePaymentReceiptType];

export const InvoicePaymentReceiptEnum = [
  InvoicePaymentReceiptType.MANUAL,
  InvoicePaymentReceiptType.CHARGE,
];

export const InvoiceLineItemType = {
  CUSTOM: "Custom",
  PRODUCT: "Product",
} as const;

export type AnyInvoiceLineItemType =
  typeof InvoiceLineItemType[keyof typeof InvoiceLineItemType];

export const InvoiceAutoPayType = {
  FINALIZED: "Finalized",
} as const;

export type AnyInvoiceAutoPayType =
  typeof InvoiceAutoPayType[keyof typeof InvoiceAutoPayType];
