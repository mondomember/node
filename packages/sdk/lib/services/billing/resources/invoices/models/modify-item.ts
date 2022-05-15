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

export const InvoiceModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
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

export interface InvoiceModifyItemInterface
  extends Partial<ContractPropertyInterface>,
    Partial<LineItemsRequestPropertyInterface>,
    Partial<PaymentIntentPropertyInterface>,
    Partial<AutoPayPropertyInterface>,
    Partial<DueAtPropertyInterface>,
    Partial<DiscountPropertyInterface>,
    Partial<ContactsPropertyInterface>,
    Partial<MembershipsPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {}
