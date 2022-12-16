import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";

import {
  SaveSourcePropertySchema,
  SaveSourcePropertyInterface,
  PaymentRequestPropertySchema,
  PaymentRequestPropertyInterface,
  GatewayPropertySchema,
  GatewayPropertyInterface,
  // SourcePropertySchema,
  // SourcePropertyInterface,
  InvoicePropertySchema,
  InvoicePropertyInterface,
} from "./base";
import { ChargeType } from "./interfaces";

// Invoice + Token (new source to pay invoice)
export const InvoiceChargeInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "payment", "invoice"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ChargeType.INVOICE],
    },
    ...PaymentRequestPropertySchema,
    ...GatewayPropertySchema,
    ...InvoicePropertySchema,
    ...SaveSourcePropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface InvoiceChargeInsertItemInterface
  extends PaymentRequestPropertyInterface,
    InvoicePropertyInterface,
    Partial<GatewayPropertyInterface>,
    Partial<SaveSourcePropertyInterface>,
    Partial<MetadataPropertyInterface> {
  type: typeof ChargeType.INVOICE;
}

export const ChargeInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  discriminator: { propertyName: "type" },
  oneOf: [InvoiceChargeInsertItemSchema],
};

export type ChargeInsertItemInterface = InvoiceChargeInsertItemInterface;
