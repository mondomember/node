import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
  PropertiesPropertySchema,
  PropertiesPropertyInterface,
} from "../../../../../models";
import {
  ContractPropertySchema,
  ContractPropertyInterface,
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

export interface InvoiceModifyItemInterface
  extends Partial<ContractPropertyInterface>,
    Partial<LineItemsRequestPropertyInterface>,
    Partial<PaymentIntentPropertyInterface>,
    Partial<RequestAutoPayPropertyInterface>,
    Partial<DueAtPropertyInterface>,
    Partial<DiscountPropertyInterface>,
    Partial<ContactsPropertyInterface>,
    Partial<MembershipsPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {}
