import { constructUIDSchema } from "../../../../../models";
import { UIDPrefix as PaymentUIDPrefix } from "../../../../../services/payment";
import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import { InvoicePaymentMethodType } from "./interfaces";

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
        InvoicePaymentMethodType.CASH,
        InvoicePaymentMethodType.CHECK,
        InvoicePaymentMethodType.WIRE,
      ],
    },
    reference: {
      type: [JsonSchemaType.STRING, JsonSchemaType.NULL],
    },
  },
};

const OnlineTokenMethod = {
  type: JsonSchemaType.OBJECT,
  required: ["type", "token"],
  additionalProperties: false,
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [InvoicePaymentMethodType.SOURCE],
    },
    token: {
      type: JsonSchemaType.STRING,
    },
    gateway: constructUIDSchema([PaymentUIDPrefix.GATEWAY]),
  },
};

const OnlineStoredMethod = {
  type: JsonSchemaType.OBJECT,
  required: ["type", "id"],
  additionalProperties: false,
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [InvoicePaymentMethodType.SOURCE],
    },
    id: constructUIDSchema([PaymentUIDPrefix.SOURCE]),
  },
};

const PaymentMethodPropertySchema = {
  method: {
    type: JsonSchemaType.OBJECT,
    oneOf: [OfflineMethod, OnlineTokenMethod, OnlineStoredMethod],
  },
};

export const InvoicePayItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["method"],
  properties: {
    ...PaymentMethodPropertySchema,
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

interface SourceStoredPayment {
  notes?: string;
  method: {
    type: typeof InvoicePaymentMethodType.SOURCE;
    id: string;
  };
}

interface SourceTokenPayment {
  notes?: string;
  method: {
    type: typeof InvoicePaymentMethodType.SOURCE;
    token: string;
    gateway?: string;
  };
}

export type InvoicePayItemInterface =
  | CheckPayment
  | CashPayment
  | WirePayment
  | SourceStoredPayment
  | SourceTokenPayment;
