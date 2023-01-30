import { InvoicePaymentMethodType } from "./interfaces";

interface CheckPayment {
  notes?: string;
  method: {
    reference?: string;
    type: typeof InvoicePaymentMethodType.CHECK;
  };
}

interface CashPayment {
  notes?: string;
  method: {
    reference?: string;
    type: typeof InvoicePaymentMethodType.CASH;
  };
}

interface WirePayment {
  notes?: string;
  method: {
    reference?: string;
    type: typeof InvoicePaymentMethodType.WIRE;
  };
}

interface SourcePayment {
  notes?: string;
  method: {
    type: typeof InvoicePaymentMethodType.SOURCE;
    id: string;
  };
}

interface TokenPayment {
  notes?: string;
  method: {
    type: typeof InvoicePaymentMethodType.TOKEN;
    token: string;
    gateway?: string;
  };
}

export type InvoicePayItem =
  | CheckPayment
  | CashPayment
  | WirePayment
  | SourcePayment
  | TokenPayment;
