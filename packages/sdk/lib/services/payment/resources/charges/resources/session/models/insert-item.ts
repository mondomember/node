import { JsonSchemaType } from "../../../../../../../schema";
import { InvoicePropertySchema } from "../../../models/base";
import { Payment } from "@mondomember/model";

export const InvoiceChargeSessionInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "invoice"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Payment.ChargeType.INVOICE],
    },
    ...InvoicePropertySchema,
    options: {
      type: JsonSchemaType.OBJECT,
      additionalProperties: false,
      patternProperties: {
        "^.*$": {
          type: [
            JsonSchemaType.STRING,
            JsonSchemaType.NUMBER,
            JsonSchemaType.NULL,
            JsonSchemaType.OBJECT,
          ],
        },
      },
    },
  },
};

export const ChargeSessionInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  discriminator: { propertyName: "type" },
  oneOf: [InvoiceChargeSessionInsertItemSchema],
};
