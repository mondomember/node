import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import { constructUIDSchema } from "../../../../../models";
import { InvoicePaymentMethodType } from "./interfaces";
import * as Payment from "../../../../../services/payment";

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
          InvoicePaymentMethodType.SOURCE,
        ],
      },
      id: constructUIDSchema([Payment.UIDPrefix.SOURCE]),
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

interface SourcePayment {
  notes?: string;
  method: {
    id?: string;
    type: typeof InvoicePaymentMethodType.SOURCE;
  };
}

export type InvoicePayItemInterface =
  | CheckPayment
  | CashPayment
  | WirePayment
  | SourcePayment;
