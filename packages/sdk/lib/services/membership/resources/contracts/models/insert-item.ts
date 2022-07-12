import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
  PropertiesPropertySchema,
  PropertiesPropertyInterface,
  ExternalIdPropertySchema,
  ExternalIdsPropertyInterface,
} from "../../../../../models";

import {
  ContactsPropertySchema,
  ContactsPropertyInterface,
  PeriodPropertySchema,
  PeriodPropertyInterface,
  CustomerPropertySchema,
  CustomerPropertyInterface,
  LineItemsRequestPropertySchema,
  LineItemsRequestPropertyInterface,
  RequestBillingPropertySchema,
  RequestBillingPropertyInterface,
  RequestRecurringPropertySchema,
  RequestRecurringPropertyInterface,
} from "./base";

export const ContractInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["customer", "period"],
  properties: {
    ...CustomerPropertySchema,
    ...PeriodPropertySchema,
    ...LineItemsRequestPropertySchema,
    ...RequestBillingPropertySchema,
    ...RequestRecurringPropertySchema,

    ...ContactsPropertySchema,

    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
    ...ExternalIdPropertySchema,
  },
};

export interface ContractInsertItemInterface
  extends CustomerPropertyInterface,
    PeriodPropertyInterface,
    Partial<LineItemsRequestPropertyInterface>,
    Partial<RequestBillingPropertyInterface>,
    Partial<RequestRecurringPropertyInterface>,
    Partial<ContactsPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface>,
    Partial<ExternalIdsPropertyInterface> {}
