import { JsonSchemaType } from "../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
  PropertiesPropertySchema,
} from "../../../../../models";
import {
  ContractPropertySchema,
  InvoiceIdPropertySchema,
  StatusPropertySchema,
  LineItemsResponsePropertySchema,
  PaymentIntentPropertySchema,
  ResponseAutoPayPropertySchema,
  PaymentPropertyResponseSchema,
  ContactsPropertySchema,
  AdjustmentsTotalPropertySchema,
  LinesTotalPropertySchema,
  PayableTotalPropertySchema,
  AdjustedTotalPropertySchema,
  DiscountPropertySchema,
  DueAtPropertySchema,
  GatewayPropertySchema,
} from "./base";

import { CustomerPropertyResponseSchema } from "../../../../customer";

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
    ...ResponseAutoPayPropertySchema,
    ...PaymentPropertyResponseSchema,
    ...ContactsPropertySchema,
    ...GatewayPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
