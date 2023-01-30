import { MetadataProperty } from "../../../common";

import {
  SaveSourceProperty,
  PaymentRequestProperty,
  GatewayProperty,
  InvoiceProperty,
} from "./base";
import { ChargeType } from "./interfaces";

export interface InvoiceChargeInsertItem
  extends PaymentRequestProperty,
    InvoiceProperty,
    Partial<GatewayProperty>,
    Partial<SaveSourceProperty>,
    Partial<MetadataProperty> {
  type: typeof ChargeType.INVOICE;
}

export type ChargeInsertItem = InvoiceChargeInsertItem;
