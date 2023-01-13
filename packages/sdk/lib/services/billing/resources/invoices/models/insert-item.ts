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
  ContractPropertySchema,
  ContractPropertyInterface,
  CustomerPropertySchema,
  CustomerPropertyInterface,
  LineItemsRequestPropertySchema,
  LineItemsRequestPropertyInterface,
  PaymentIntentPropertySchema,
  PaymentIntentPropertyInterface,
  RequestAutoPayPropertySchema,
  RequestAutoPayPropertyInterface,
  ContactsPropertySchema,
  ContactsPropertyInterface,
  MembershipsPropertySchema,
  MembershipsPropertyInterface,
  DiscountPropertySchema,
  DiscountPropertyInterface,
  DueAtPropertySchema,
  DueAtPropertyInterface,
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

export interface InvoiceInsertItemInterface
  extends CustomerPropertyInterface,
    Partial<ContractPropertyInterface>,
    Partial<LineItemsRequestPropertyInterface>,
    Partial<PaymentIntentPropertyInterface>,
    Partial<RequestAutoPayPropertyInterface>,
    Partial<DueAtPropertyInterface>,
    Partial<DiscountPropertyInterface>,
    Partial<ContactsPropertyInterface>,
    Partial<MembershipsPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface>,
    Partial<ExternalIdsPropertyInterface> {}
