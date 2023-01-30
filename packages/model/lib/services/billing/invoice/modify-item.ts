import { MetadataProperty, PropertiesProperty } from "../../../common";
import {
  ContractProperty,
  LineItemsRequestProperty,
  PaymentIntentProperty,
  RequestAutoPayProperty,
  ContactsProperty,
  MembershipsProperty,
  DiscountProperty,
  DueAtProperty,
} from "./base";

export interface InvoiceModifyItem
  extends Partial<ContractProperty>,
    Partial<LineItemsRequestProperty>,
    Partial<PaymentIntentProperty>,
    Partial<RequestAutoPayProperty>,
    Partial<DueAtProperty>,
    Partial<DiscountProperty>,
    Partial<ContactsProperty>,
    Partial<MembershipsProperty>,
    Partial<MetadataProperty>,
    Partial<PropertiesProperty> {}
