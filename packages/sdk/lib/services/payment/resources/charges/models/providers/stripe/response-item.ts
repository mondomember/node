import { JsonSchemaType } from "../../../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
} from "../../../../../../../models";
import { CustomerPropertyResponseSchema } from "../../../../../../customer";
import {
  StatusPropertySchema,
  RefundableAmountPropertySchema,
  AmountPropertySchema,
  PaymentResponsePropertySchema,
  InvoicePropertySchema,
  ReferencePropertySchema,
  GatewayPropertySchema,
  ChargeIdPropertySchema,
} from "../../base";
import { Payment } from "@mondomember/model";
import { StripeObjectSchema } from "./base";

export const StripeInvoiceChargeResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "type",
    "status",
    "invoice",
    "amount",
    "customer",
    "gateway",
    "object",
    "reference",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Payment.ChargeType.INVOICE],
    },
    ...ChargeIdPropertySchema,
    ...StatusPropertySchema,
    ...RefundableAmountPropertySchema,
    ...AmountPropertySchema,
    ...PaymentResponsePropertySchema,
    ...GatewayPropertySchema,
    ...CustomerPropertyResponseSchema,
    ...InvoicePropertySchema,
    ...StripeObjectSchema,
    ...ReferencePropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export const StripeChargeResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  discriminator: { propertyName: "type" },
  oneOf: [StripeInvoiceChargeResponseItemSchema],
};
