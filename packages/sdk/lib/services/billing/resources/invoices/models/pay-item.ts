import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import { InvoicePaymentMethodType } from "./interfaces";

const Notes = {
  notes: {
    type: JsonSchemaType.STRING,
  },
};

const Method = {
  method: {
    type: JsonSchemaType.OBJECT,
    required: ["type"],
    additionalProperties: false,
    properties: {
      type: {
        type: JsonSchemaType.STRING,
        enum: [
          InvoicePaymentMethodType.CASH,
          InvoicePaymentMethodType.CHECK,
          InvoicePaymentMethodType.WIRE,
        ],
      },
      reference: {
        type: [JsonSchemaType.STRING, JsonSchemaType.NULL],
      },
    },
  },
};

export const InvoicePayItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["method"],
  properties: {
    ...Method,
    ...Notes,
  },
};

interface CheckPayment {
  notes?: string;
  method: {
    reference?: string;
    type: typeof InvoicePaymentMethodType.CHECK;
  };
}

interface CashPayment {
  notes?: string;
  method: {
    reference?: string;
    type: typeof InvoicePaymentMethodType.CASH;
  };
}

interface WirePayment {
  notes?: string;
  method: {
    reference?: string;
    type: typeof InvoicePaymentMethodType.WIRE;
  };
}

export type InvoicePayItemInterface = CheckPayment | CashPayment | WirePayment;
