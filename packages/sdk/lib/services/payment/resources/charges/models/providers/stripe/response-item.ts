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
} from "../../../../../../crm";
import {
  StatusPropertySchema,
  StatusPropertyInterface,
  RefundableAmountPropertySchema,
  RefundableAmountPropertyInterface,
  AmountPropertySchema,
  AmountPropertyInterface,
  PaymentResponsePropertySchema,
  PaymentResponsePropertyInterface,
  // TokenPropertySchema,
  // TokenPropertyInterface,
  InvoicePropertySchema,
  InvoicePropertyInterface,
  ReferencePropertySchema,
  ReferencePropertyInterface,
  GatewayPropertySchema,
  GatewayPropertyInterface,
  ChargeIdPropertySchema,
} from "../../base";
import { ChargeType } from "../../interfaces";
import { StripeObjectSchema, StripeObjectInterface } from "./base";

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
      enum: [ChargeType.INVOICE],
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

interface BaseStripeChargeResponseItemInterface
  extends IdPropertyInterface,
    StatusPropertyInterface,
    PaymentResponsePropertyInterface,
    CustomerPropertyResponseInterface,
    GatewayPropertyInterface,
    AmountPropertyInterface,
    StripeObjectInterface,
    ReferencePropertyInterface,
    RefundableAmountPropertyInterface,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface> {}

interface StripeInvoiceChargeResponseItemInterface
  extends BaseStripeChargeResponseItemInterface,
    InvoicePropertyInterface {
  type: typeof ChargeType.INVOICE;
}

export type StripeChargeResponseItemInterface =
  StripeInvoiceChargeResponseItemInterface;
