import { JsonSchemaType } from "../../../../../schema";
import { MetadataPropertySchema } from "../../../../../models";

import {
  SaveSourcePropertySchema,
  PaymentRequestPropertySchema,
  GatewayPropertySchema,
  InvoicePropertySchema,
} from "./base";
import { Payment } from "@mondomember/model";

// Invoice + Token (new source to pay invoice)
export const InvoiceChargeInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "payment", "invoice"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Payment.ChargeType.INVOICE],
    },
    ...PaymentRequestPropertySchema,
    ...GatewayPropertySchema,
    ...InvoicePropertySchema,
    ...SaveSourcePropertySchema,
    ...MetadataPropertySchema,
  },
};

export const ChargeInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  discriminator: { propertyName: "type" },
  oneOf: [InvoiceChargeInsertItemSchema],
};
