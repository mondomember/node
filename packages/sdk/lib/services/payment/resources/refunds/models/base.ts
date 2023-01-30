import { JsonSchemaType } from "../../../../../schema";
import { RefundStatusEnum } from ".";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { ChargeIdSchema } from "../../charges/models/base";
import { GatewayIdSchema } from "../../gateways/models/base";
import { Payment } from "@mondomember/model";

export const RefundIdSchema = constructUIDSchema([Payment.UIDPrefix.REFUND]);

export const RefundIdPropertySchema = constructUIDPropertySchema(
  Payment.UIDPrefix.REFUND
);

export const StatusPropertySchema = {
  status: {
    type: JsonSchemaType.STRING,
    enum: RefundStatusEnum,
  },
};

export const AmountPropertySchema = {
  amount: {
    type: JsonSchemaType.INTEGER,
    minimum: 0,
  },
};

export const ChargePropertySchema = {
  charge: ChargeIdSchema,
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
