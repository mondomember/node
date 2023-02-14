import { CustomerPropertyRequest } from "../../customer";

import { InvoiceProperty } from "../charge/base";
import { ChargeType } from "../charge/interfaces";

export interface InvoiceChargeSessionInsertItem
  extends CustomerPropertyRequest,
    InvoiceProperty {
  type: typeof ChargeType.INVOICE;
  options?: Record<string, string | number | boolean | unknown>;
}

export type ChargeSessionInsertItem = InvoiceChargeSessionInsertItem;
