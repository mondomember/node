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
  PartialPeriodPropertySchema,
  PeriodPropertyInterface,
  LineItemsRequestPropertySchema,
  LineItemsRequestPropertyInterface,
  RequestBillingPropertySchema,
  RequestBillingPropertyInterface,
  RequestRecurringPropertySchema,
  RequestRecurringPropertyInterface,
} from "./base";

import { DeepPartial } from "utility-types";

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

export interface ContractModifyItemInterface
  extends DeepPartial<PeriodPropertyInterface>,
    Partial<LineItemsRequestPropertyInterface>,
    Partial<RequestBillingPropertyInterface>,
    Partial<RequestRecurringPropertyInterface>,
    Partial<ContactsPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {}
