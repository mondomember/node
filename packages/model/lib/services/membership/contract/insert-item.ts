import {
  MetadataProperty,
  PropertiesProperty,
  ExternalIdsProperty,
} from "../../../common";

import {
  ContactsProperty,
  PeriodProperty,
  CustomerProperty,
  LineItemsRequestProperty,
  RequestBillingProperty,
  RequestRecurringProperty,
} from "./base";

export interface ContractInsertItem
  extends CustomerProperty,
    PeriodProperty,
    Partial<LineItemsRequestProperty>,
    Partial<RequestBillingProperty>,
    Partial<RequestRecurringProperty>,
    Partial<ContactsProperty>,
    Partial<MetadataProperty>,
    Partial<PropertiesProperty>,
    Partial<ExternalIdsProperty> {}
