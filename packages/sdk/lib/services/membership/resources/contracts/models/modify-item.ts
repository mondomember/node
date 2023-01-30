import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  PropertiesPropertySchema,
} from "../../../../../models";

import {
  ContactsPropertySchema,
  PartialPeriodPropertySchema,
  LineItemsRequestPropertySchema,
  RequestBillingPropertySchema,
  RequestRecurringPropertySchema,
} from "./base";

export const ContractModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...PartialPeriodPropertySchema,
    ...LineItemsRequestPropertySchema,
    ...RequestBillingPropertySchema,
    ...RequestRecurringPropertySchema,
    ...ContactsPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};
