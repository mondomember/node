export const InvoiceTransactionType = {
  CHARGE: "Charge",
  CHARGE_REFUND: "ChargeRefund",
  MANUAL_REFUND: "ManualRefund",
  ADJUSTMENT: "Adjustment",
} as const;

export type AnyInvoiceTransactionType =
  typeof InvoiceTransactionType[keyof typeof InvoiceTransactionType];

export const InvoiceTransactionStatus = {
  SUCCESS: "Success",
  FAIL: "Fail",
} as const;

export type AnyInvoiceTransactionStatus =
  typeof InvoiceTransactionStatus[keyof typeof InvoiceTransactionStatus];
