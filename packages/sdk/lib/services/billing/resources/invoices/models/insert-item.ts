import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  PropertiesPropertySchema,
  ExternalIdPropertySchema,
} from "../../../../../models";
import {
  ContractPropertySchema,
  CustomerPropertySchema,
  LineItemsRequestPropertySchema,
  PaymentIntentPropertySchema,
  RequestAutoPayPropertySchema,
  ContactsPropertySchema,
  MembershipsPropertySchema,
  DiscountPropertySchema,
  DueAtPropertySchema,
} from "./base";

export const InvoiceInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["customer"],
  properties: {
    ...CustomerPropertySchema,
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
    ...ExternalIdPropertySchema,
  },
};
