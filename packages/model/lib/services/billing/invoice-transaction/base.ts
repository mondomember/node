import { AnyInvoiceTransactionStatus } from "./interfaces";

export interface InvoiceProperty {
  invoice: string;
}

export interface StatusProperty {
  status: AnyInvoiceTransactionStatus;
}

export interface AmountProperty {
  amount: number;
}

export interface NotesProperty {
  notes: string;
}
