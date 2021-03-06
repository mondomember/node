import { JsonSchemaType } from "../../../../../schema";
import { Provider, AnyPaymentProvider } from "../../../models";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { UIDPrefix } from "../../../constants";
import { GatewayIdSchema } from "../../gateways/models/base";

export const SourceIdSchema = constructUIDSchema([UIDPrefix.SOURCE]);

export const SourceIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.SOURCE
);

export const LabelSchema = {
  label: {
    type: JsonSchemaType.STRING,
  },
};

export interface LabelInterface {
  label: string;
}

export const DefaultSchema = {
  default: {
    type: JsonSchemaType.BOOLEAN,
  },
};

export interface DefaultInterface {
  default: boolean;
}

export const ReferenceSchema = {
  reference: {
    type: JsonSchemaType.STRING,
  },
};

export interface ReferenceInterface {
  reference: string;
}

export const TokenSchema = {
  token: {
    type: JsonSchemaType.STRING,
  },
};

export interface TokenInterface {
  token: string;
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
