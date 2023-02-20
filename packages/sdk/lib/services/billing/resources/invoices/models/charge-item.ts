import { JsonSchemaType } from "../../../../../schema";
import { Billing } from "@mondomember/model";

const Notes = {
  notes: {
    type: JsonSchemaType.STRING,
  },
};

const TokenMethod = {
  type: JsonSchemaType.OBJECT,
  required: ["type", "token"],
  additionalProperties: false,
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Billing.InvoicePaymentMethodType.TOKEN],
    },
    token: {
      type: JsonSchemaType.STRING,
    },
  },
};

const PaymentMethodPropertySchema = {
  method: {
    type: JsonSchemaType.OBJECT,
    discriminator: { propertyName: "type" },
    oneOf: [TokenMethod],
  },
};

export const InvoiceChargeItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["method"],
  properties: {
    ...PaymentMethodPropertySchema,
    ...Notes,
  },
};
