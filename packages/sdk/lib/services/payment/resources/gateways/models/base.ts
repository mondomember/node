import { JsonSchemaType } from "../../../../../schema";

export const GatewayIdSchema = {
  type: JsonSchemaType.STRING,
  // Note - we are NOT requiring a UUID
};

export const GatewayIdPropertySchema = {
  id: GatewayIdSchema,
};

export interface GatewayIdPropertyInterface {
  id: string;
}

export const LabelPropertySchema = {
  label: {
    type: JsonSchemaType.STRING,
  },
};

export interface LabelPropertyInterface {
  label: string;
}

export const DescriptionPropertySchema = {
  description: {
    type: JsonSchemaType.STRING,
  },
};

export interface DescriptionPropertyInterface {
  description: string;
}

export const DefaultPropertySchema = {
  default: {
    type: JsonSchemaType.BOOLEAN,
  },
};

export interface DefaultPropertyInterface {
  default: boolean;
}

export const LivePropertySchema = {
  live: {
    type: JsonSchemaType.BOOLEAN,
  },
};

export interface LivePropertyInterface {
  live: boolean;
}
