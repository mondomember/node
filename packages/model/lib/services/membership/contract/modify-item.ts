import { MetadataProperty, PropertiesProperty } from "../../../common";

import {
  ContactsProperty,
  PeriodProperty,
  LineItemsRequestProperty,
  RequestBillingProperty,
  RequestRecurringProperty,
} from "./base";

import { DeepPartial } from "utility-types";

export interface ContractModifyItem
  extends DeepPartial<PeriodProperty>,
    Partial<LineItemsRequestProperty>,
    Partial<RequestBillingProperty>,
    Partial<RequestRecurringProperty>,
    Partial<ContactsProperty>,
    Partial<MetadataProperty>,
    Partial<PropertiesProperty> {}
