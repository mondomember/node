import { InvoicePaymentMethodType } from "./interfaces";

interface TokenPayment {
  notes?: string;
  method: {
    type: typeof InvoicePaymentMethodType.TOKEN;
    token: string;
  };
}

export type InvoiceChargeItem = TokenPayment;
