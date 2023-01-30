import { CustomerPropertyRequest } from "../../customer";

import { GatewayProperty, InvoiceProperty } from "../charge/base";

export interface ChargeSessionInsertItem
  extends CustomerPropertyRequest,
    GatewayProperty,
    InvoiceProperty {
  options?: Record<string, string>;
}
