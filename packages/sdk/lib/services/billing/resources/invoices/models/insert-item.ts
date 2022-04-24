import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
  PropertiesPropertySchema,
  PropertiesPropertyInterface,
} from "../../../../../models";
import {
  ContractPropertySchema,
  ContractPropertyInterface,
  CustomerPropertySchema,
  CustomerPropertyInterface,
  LineItemsRequestPropertySchema,
  LineItemsRequestPropertyInterface,
  PaymentIntentPropertySchema,
  PaymentIntentPropertyInterface,
  AutoPayPropertySchema,
  AutoPayPropertyInterface,
  ContactsPropertySchema,
  ContactsPropertyInterface,
  MembershipsPropertySchema,
  MembershipsPropertyInterface,
  DiscountPropertySchema,
  DiscountPropertyInterface,
  DueAtPropertySchema,
  DueAtPropertyInterface,
} from "./base";

export const InvoiceInsertItemSchema: JsonSchema = {
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
    ...AutoPayPropertySchema,
    ...ContactsPropertySchema,
    ...MembershipsPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface InvoiceInsertItemInterface
  extends CustomerPropertyInterface,
    Partial<ContractPropertyInterface>,
    Partial<LineItemsRequestPropertyInterface>,
    Partial<PaymentIntentPropertyInterface>,
    Partial<AutoPayPropertyInterface>,
    Partial<DueAtPropertyInterface>,
    Partial<DiscountPropertyInterface>,
    Partial<ContactsPropertyInterface>,
    Partial<MembershipsPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {}
