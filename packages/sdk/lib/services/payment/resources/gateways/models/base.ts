import { JsonSchemaType } from "../../../../../schema";

export const GatewayIdSchema = {
  type: JsonSchemaType.STRING,
  // Note - we are NOT requiring a UUID
};

export const GatewayIdPropertySchema = {
  id: GatewayIdSchema,
};

export const IntegrationIdPropertySchema = {
  integrationId: {
    type: JsonSchemaType.STRING,
  },
};

export const LabelPropertySchema = {
  label: {
    type: JsonSchemaType.STRING,
  },
};

export const DescriptionPropertySchema = {
  description: {
    type: JsonSchemaType.STRING,
  },
};

export const DefaultPropertySchema = {
  default: {
    type: JsonSchemaType.BOOLEAN,
  },
};

export const LivePropertySchema = {
  live: {
    type: JsonSchemaType.BOOLEAN,
  },
};
