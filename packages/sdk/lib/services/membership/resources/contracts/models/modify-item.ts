import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
  PropertiesPropertySchema,
  PropertiesPropertyInterface,
} from "../../../../../models";

import {
  ContactsPropertySchema,
  ContactsPropertyInterface,
  PeriodPropertySchema,
  PeriodPropertyInterface,
  LineItemsRequestPropertySchema,
  LineItemsRequestPropertyInterface,
  RequestBillingPropertySchema,
  RequestBillingPropertyInterface,
  RequestRecurringPropertySchema,
  RequestRecurringPropertyInterface,
} from "./base";

export const ContractModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...PeriodPropertySchema,
    ...LineItemsRequestPropertySchema,
    ...RequestBillingPropertySchema,
    ...RequestRecurringPropertySchema,
    ...ContactsPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface ContractModifyItemInterface
  extends Partial<PeriodPropertyInterface>,
    Partial<LineItemsRequestPropertyInterface>,
    Partial<RequestBillingPropertyInterface>,
    Partial<RequestRecurringPropertyInterface>,
    Partial<ContactsPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {}
