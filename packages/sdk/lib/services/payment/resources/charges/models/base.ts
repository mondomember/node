import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";

import { SourceIdSchema } from "../../sources/models/base";
import { GatewayIdSchema } from "../../gateways/models/base";
import { ChargeTypeEnum, ChargeStatusEnum } from "./interfaces";
import { Payment, Billing } from "@mondomember/model";

export const ChargeIdSchema = constructUIDSchema([Payment.UIDPrefix.CHARGE]);

export const ChargeIdPropertySchema = constructUIDPropertySchema(
  Payment.UIDPrefix.CHARGE
);

export const StatusPropertySchema = {
  status: {
    type: JsonSchemaType.STRING,
    enum: ChargeStatusEnum,
  },
};

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: ChargeTypeEnum,
  },
};

export const SaveSourcePropertySchema = {
  saveSource: {
    type: JsonSchemaType.BOOLEAN,
  },
};

const TokenPaymentRequestSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "token"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Payment.ChargePaymentType.TOKEN],
    },
    token: {
      type: JsonSchemaType.STRING,
    },
    ...SaveSourcePropertySchema,
  },
};

const TokenPaymentResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "token"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Payment.ChargePaymentType.TOKEN],
    },
    token: {
      type: JsonSchemaType.STRING,
    },
  },
};

const SourcePaymentSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "id"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Payment.ChargePaymentType.SOURCE],
    },
    id: SourceIdSchema,
  },
};

const PaymentRequestSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [TokenPaymentRequestSchema, SourcePaymentSchema],
};

const PaymentResponseSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [TokenPaymentResponseSchema, SourcePaymentSchema],
};

export const PaymentRequestPropertySchema = {
  payment: PaymentRequestSchema,
};

export const PaymentResponsePropertySchema = {
  payment: PaymentResponseSchema,
};

export const RefundableAmountPropertySchema = {
  refundableAmount: {
    type: JsonSchemaType.INTEGER,
    minimum: 0,
  },
};

export const AmountPropertySchema = {
  amount: {
    type: JsonSchemaType.INTEGER,
    minimum: 0,
  },
};

export const InvoicePropertySchema = {
  invoice: constructUIDSchema([Billing.UIDPrefix.INVOICE]),
};

export const ReferencePropertySchema = {
  reference: {
    type: JsonSchemaType.STRING,
  },
};

export const GatewayPropertySchema = {
  gateway: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id", "provider"],
    properties: {
      id: GatewayIdSchema,
      provider: {
        type: JsonSchemaType.STRING,
        enum: [Payment.Provider.STRIPE],
      },
    },
  },
};
