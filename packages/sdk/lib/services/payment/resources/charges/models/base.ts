import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { AnyChargeStatus, ChargeStatusEnum } from ".";
import { AnyPaymentProvider, Provider } from "../../../models";
import { UIDPrefix } from "../../../constants";
import * as Billing from "../../../../../services/billing/constants";

import { SourceIdSchema } from "../../sources/models/base";
import { GatewayIdSchema } from "../../gateways/models/base";

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

export const SourcePropertySchema = {
  source: SourceIdSchema,
};

export interface SourcePropertyInterface {
  source: string;
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
