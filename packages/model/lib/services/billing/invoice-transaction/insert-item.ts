import { InvoiceTransactionType } from "./interfaces";

interface ManualRefund {
  type: typeof InvoiceTransactionType.MANUAL_REFUND;
  amount?: number;
  notes?: string;
}

interface Adjustment {
  type: typeof InvoiceTransactionType.ADJUSTMENT;
  amount: number;
  notes?: string;
}

export type InvoiceTransactionInsertItem = ManualRefund | Adjustment;
