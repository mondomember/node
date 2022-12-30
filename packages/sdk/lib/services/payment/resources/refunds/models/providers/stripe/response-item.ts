import { JsonSchemaType } from "../../../../../../../schema";
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
} from "../../../../../../../models";
import {
  CustomerPropertyResponseSchema,
  CustomerPropertyResponseInterface,
} from "../../../../../../crm/models";
import {
  StatusPropertySchema,
  StatusPropertyInterface,
  AmountPropertySchema,
  AmountPropertyInterface,
  ChargePropertySchema,
  ChargePropertyInterface,
  GatewayPropertySchema,
  GatewayPropertyInterface,
  RefundIdPropertySchema,
} from "../../base";
import {
  PaymentResponsePropertyInterface,
  PaymentResponsePropertySchema,
} from "../../../../charges/models/base";

import { StripeObjectSchema, StripeObjectInterface } from "./base";

export const StripeRefundResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "amount",
    "status",
    "charge",
    "payment",
    "customer",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...RefundIdPropertySchema,
    ...StatusPropertySchema,
    ...AmountPropertySchema,
    ...ChargePropertySchema,
    ...PaymentResponsePropertySchema,
    ...GatewayPropertySchema,
    ...StripeObjectSchema,
    ...CustomerPropertyResponseSchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface StripeRefundResponseItemInterface
  extends IdPropertyInterface,
    StatusPropertyInterface,
    AmountPropertyInterface,
    ChargePropertyInterface,
    PaymentResponsePropertyInterface,
    GatewayPropertyInterface,
    StripeObjectInterface,
    CustomerPropertyResponseInterface,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
