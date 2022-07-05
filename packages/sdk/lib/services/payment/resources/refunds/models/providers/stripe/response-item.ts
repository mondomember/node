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
  SourcePropertySchema,
  SourcePropertyInterface,
  GatewayPropertySchema,
  GatewayPropertyInterface,
  RefundIdPropertySchema,
} from "../../base";

import { StripeObjectSchema, StripeObjectInterface } from "./base";

export const StripeRefundResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "amount",
    "status",
    "charge",
    "source",
    "customer",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...RefundIdPropertySchema,
    ...StatusPropertySchema,
    ...AmountPropertySchema,
    ...ChargePropertySchema,
    ...SourcePropertySchema,
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
    SourcePropertyInterface,
    GatewayPropertyInterface,
    StripeObjectInterface,
    CustomerPropertyResponseInterface,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
