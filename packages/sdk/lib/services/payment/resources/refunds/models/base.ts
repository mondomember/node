import { JsonSchemaType } from "../../../../../schema";
import { AnyRefundStatus, RefundStatusEnum } from ".";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { UIDPrefix } from "../../../constants";
import { AnyPaymentProvider, Provider } from "../../../models";
import { ChargeIdSchema } from "../../charges/models/base";
import { GatewayIdSchema } from "../../gateways/models/base";

export const RefundIdSchema = constructUIDSchema([UIDPrefix.REFUND]);

export const RefundIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.REFUND
);

export const StatusPropertySchema = {
  status: {
    type: JsonSchemaType.STRING,
    enum: RefundStatusEnum,
  },
};

export interface StatusPropertyInterface {
  status: AnyRefundStatus;
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

export const ChargePropertySchema = {
  charge: ChargeIdSchema,
};

export interface ChargePropertyInterface {
  charge: string;
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
