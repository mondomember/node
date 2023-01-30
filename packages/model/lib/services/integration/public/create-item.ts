import { DeviceIdProperty, InvoiceIdProperty } from "./base";

export interface PublicTokenCreateItem
  extends Partial<DeviceIdProperty>,
    Partial<InvoiceIdProperty> {
  token: string;
}
