import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { GatewayIdSchema } from "../../gateways/models/base";
import { Payment } from "@mondomember/model";

export const SourceIdSchema = constructUIDSchema([Payment.UIDPrefix.SOURCE]);

export const SourceIdPropertySchema = constructUIDPropertySchema(
  Payment.UIDPrefix.SOURCE
);

export const LabelPropertySchema = {
  label: {
    type: JsonSchemaType.STRING,
  },
};

export const DefaultPropertySchema = {
  default: {
    type: JsonSchemaType.BOOLEAN,
  },
};

export const ReferencePropertySchema = {
  reference: {
    type: JsonSchemaType.STRING,
  },
};

export const TokenPropertySchema = {
  token: {
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
