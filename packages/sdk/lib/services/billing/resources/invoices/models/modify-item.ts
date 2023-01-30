import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  PropertiesPropertySchema,
} from "../../../../../models";
import {
  ContractPropertySchema,
  LineItemsRequestPropertySchema,
  PaymentIntentPropertySchema,
  RequestAutoPayPropertySchema,
  ContactsPropertySchema,
  MembershipsPropertySchema,
  DiscountPropertySchema,
  DueAtPropertySchema,
} from "./base";

export const InvoiceModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...ContractPropertySchema,
    ...LineItemsRequestPropertySchema,
    ...DueAtPropertySchema,
    ...DiscountPropertySchema,
    ...PaymentIntentPropertySchema,
    ...RequestAutoPayPropertySchema,
    ...ContactsPropertySchema,
    ...MembershipsPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};
