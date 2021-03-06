import { JsonSchemaType } from "../../../../../schema";
import {
  IdPropertyInterface,
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
  UpdatedAtPropertySchema,
  UpdatedAtPropertyInterface,
  DeletedAtPropertySchema,
  DeletedAtPropertyInterface,
  LastUpdatedPropertySchema,
  LastUpdatedPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
  PropertiesPropertySchema,
  PropertiesPropertyInterface,
} from "../../../../../models";
import {
  ContractPropertySchema,
  ContractPropertyInterface,
  InvoiceIdPropertySchema,
  StatusPropertySchema,
  StatusPropertyInterface,
  LineItemsResponsePropertySchema,
  LineItemsResponsePropertyInterface,
  PaymentIntentPropertySchema,
  PaymentIntentPropertyInterface,
  AutoPayPropertySchema,
  AutoPayPropertyInterface,
  PaymentPropertyResponseSchema,
  PaymentPropertyResponseInterface,
  ContactsPropertySchema,
  ContactsPropertyInterface,
  AdjustmentsTotalPropertySchema,
  AdjustmentsTotalPropertyInterface,
  LinesTotalPropertySchema,
  LinesTotalPropertyInterface,
  PayableTotalPropertySchema,
  PayableTotalPropertyInterface,
  AdjustedTotalPropertySchema,
  AdjustedTotalPropertyInterface,
  DiscountPropertySchema,
  DiscountPropertyInterface,
  DueAtPropertySchema,
  DueAtPropertyInterface,
} from "./base";

import {
  CustomerPropertyResponseSchema,
  CustomerPropertyResponseInterface,
} from "../../../../crm";

export const InvoiceResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "status",
    "customer",
    "linesTotal",
    "payableTotal",
    "adjustedTotal",
    "discount",
    "dueAt",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...InvoiceIdPropertySchema,
    ...StatusPropertySchema,
    ...CustomerPropertyResponseSchema,
    ...ContractPropertySchema,
    ...LineItemsResponsePropertySchema,
    ...AdjustmentsTotalPropertySchema,
    ...LinesTotalPropertySchema,
    ...PayableTotalPropertySchema,
    ...AdjustedTotalPropertySchema,
    ...DiscountPropertySchema,
    ...DueAtPropertySchema,
    ...PaymentIntentPropertySchema,
    ...AutoPayPropertySchema,
    ...PaymentPropertyResponseSchema,
    ...ContactsPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface InvoiceResponseItemInterface
  extends IdPropertyInterface,
    StatusPropertyInterface,
    CustomerPropertyResponseInterface,
    Partial<ContractPropertyInterface>,
    Partial<LineItemsResponsePropertyInterface>,
    Partial<AdjustmentsTotalPropertyInterface>,
    LinesTotalPropertyInterface,
    PayableTotalPropertyInterface,
    AdjustedTotalPropertyInterface,
    DiscountPropertyInterface,
    DueAtPropertyInterface,
    Partial<PaymentIntentPropertyInterface>,
    Partial<AutoPayPropertyInterface>,
    Partial<PaymentPropertyResponseInterface>,
    Partial<ContactsPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {}
