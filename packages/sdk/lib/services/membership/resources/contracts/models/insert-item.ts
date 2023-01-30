import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  PropertiesPropertySchema,
  ExternalIdPropertySchema,
} from "../../../../../models";

import {
  ContactsPropertySchema,
  PeriodPropertySchema,
  CustomerPropertySchema,
  LineItemsRequestPropertySchema,
  RequestBillingPropertySchema,
  RequestRecurringPropertySchema,
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
