import { JsonSchemaType } from "../../../../../schema";
import { constructUIDSchema } from "../../../../../models";
import { Billing, Payment } from "@mondomember/model";

const Notes = {
  notes: {
    type: JsonSchemaType.STRING,
  },
};

const OfflineMethod = {
  type: JsonSchemaType.OBJECT,
  required: ["type"],
  additionalProperties: false,
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [
        Billing.InvoicePaymentMethodType.CASH,
        Billing.InvoicePaymentMethodType.CHECK,
        Billing.InvoicePaymentMethodType.WIRE,
      ],
    },
    reference: {
      type: JsonSchemaType.STRING,
    },
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
    gateway: constructUIDSchema([Payment.UIDPrefix.GATEWAY]),
  },
};

const SourceMethod = {
  type: JsonSchemaType.OBJECT,
  required: ["type", "id"],
  additionalProperties: false,
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Billing.InvoicePaymentMethodType.SOURCE],
    },
    id: constructUIDSchema([Payment.UIDPrefix.SOURCE]),
  },
};

const PaymentMethodPropertySchema = {
  method: {
    type: JsonSchemaType.OBJECT,
    discriminator: { propertyName: "type" },
    oneOf: [OfflineMethod, TokenMethod, SourceMethod],
  },
};

export const InvoicePayItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["method"],
  properties: {
    ...PaymentMethodPropertySchema,
    ...Notes,
  },
};
