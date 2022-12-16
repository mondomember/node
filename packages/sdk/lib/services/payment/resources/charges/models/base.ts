import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { AnyPaymentProvider, Provider } from "../../../models";
import { UIDPrefix } from "../../../constants";
import * as Billing from "../../../../../services/billing/constants";

import { SourceIdSchema } from "../../sources/models/base";
import { GatewayIdSchema } from "../../gateways/models/base";
import {
  AnyChargeType,
  ChargeTypeEnum,
  ChargePaymentType,
  AnyChargeStatus,
  ChargeStatusEnum,
} from "./interfaces";

export const ChargeIdSchema = constructUIDSchema([UIDPrefix.CHARGE]);

export const ChargeIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.CHARGE
);

export const StatusPropertySchema = {
  status: {
    type: JsonSchemaType.STRING,
    enum: ChargeStatusEnum,
  },
};

export interface StatusPropertyInterface {
  status: AnyChargeStatus;
}

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: ChargeTypeEnum,
  },
};

export interface TypePropertyInterface {
  type: AnyChargeType;
}

export interface SaveSourcePropertyInterface {
  saveSource: boolean;
}

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
      enum: [ChargePaymentType.TOKEN],
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
      enum: [ChargePaymentType.TOKEN],
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
      enum: [ChargePaymentType.SOURCE],
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

interface SourcePaymentInterface {
  type: typeof ChargePaymentType.SOURCE;
  id: string;
}

interface TokenPaymentRequestInterface extends SaveSourcePropertyInterface {
  type: typeof ChargePaymentType.TOKEN;
  token: string;
}

interface TokenPaymentResponseInterface {
  type: typeof ChargePaymentType.TOKEN;
  token: string;
}

export interface PaymentResponsePropertyInterface {
  payment: SourcePaymentInterface | TokenPaymentResponseInterface;
}

export interface PaymentRequestPropertyInterface {
  payment: SourcePaymentInterface | TokenPaymentRequestInterface;
}

export const RefundableAmountPropertySchema = {
  refundableAmount: {
    type: JsonSchemaType.INTEGER,
    minimum: 0,
  },
};

export interface RefundableAmountPropertyInterface {
  refundableAmount: number;
}

export const AmountPropertySchema = {
  amount: {
    type: JsonSchemaType.INTEGER,
    minimum: 0,
  },
};

export interface AmountPropertyInterface {
  amount: number;
}

export const InvoicePropertySchema = {
  invoice: constructUIDSchema([Billing.UIDPrefix.INVOICE]),
};

export interface InvoicePropertyInterface {
  invoice: string;
}

export const ReferencePropertySchema = {
  reference: {
    type: JsonSchemaType.STRING,
  },
};

export interface ReferencePropertyInterface {
  reference: string;
}

export const GatewayPropertySchema = {
  gateway: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id", "provider"],
    properties: {
      id: GatewayIdSchema,
      provider: {
        type: JsonSchemaType.STRING,
        enum: [Provider.STRIPE],
      },
    },
  },
};

export interface GatewayPropertyInterface {
  gateway: {
    id: string;
    provider: AnyPaymentProvider;
  };
}
