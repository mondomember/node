import {
  MetadataProperty,
  PropertiesProperty,
  ExternalIdsProperty,
} from "../../../common";
import {
  ContractProperty,
  CustomerProperty,
  LineItemsRequestProperty,
  PaymentIntentProperty,
  RequestAutoPayProperty,
  ContactsProperty,
  MembershipsProperty,
  DiscountProperty,
  DueAtProperty,
} from "./base";

export interface InvoiceInsertItem
  extends CustomerProperty,
    Partial<ContractProperty>,
    Partial<LineItemsRequestProperty>,
    Partial<PaymentIntentProperty>,
    Partial<RequestAutoPayProperty>,
    Partial<DueAtProperty>,
    Partial<DiscountProperty>,
    Partial<ContactsProperty>,
    Partial<MembershipsProperty>,
    Partial<MetadataProperty>,
    Partial<PropertiesProperty>,
    Partial<ExternalIdsProperty> {}
