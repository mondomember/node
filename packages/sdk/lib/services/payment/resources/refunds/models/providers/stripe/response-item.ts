import { JsonSchemaType } from "../../../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
} from "../../../../../../../models";
import { CustomerPropertyResponseSchema } from "../../../../../../customer/models";
import {
  StatusPropertySchema,
  AmountPropertySchema,
  ChargePropertySchema,
  GatewayPropertySchema,
  RefundIdPropertySchema,
} from "../../base";
import { PaymentResponsePropertySchema } from "../../../../charges/models/base";

import { StripeObjectSchema } from "./base";

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
