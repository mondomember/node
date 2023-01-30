import { JsonSchemaType } from "../../../../../schema";

export const NamePropertySchema = {
  name: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export const AppPropertySchema = {
  app: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    properties: {
      uiVersion: {
        type: JsonSchemaType.STRING,
      },
    },
  },
};

const IntegrationUrlSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  patternProperties: {
    "^.*$": {
      type: JsonSchemaType.STRING,
    },
  },
};

const IntegrationSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["label"],
  properties: {
    label: {
      type: JsonSchemaType.STRING,
    },
    urls: IntegrationUrlSchema,
  },
};

export const IntegrationsPropertySchema = {
  integrations: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    patternProperties: {
      "^.*$": IntegrationSchema,
    },
  },
};

export const BrandingPropertySchema = {
  branding: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    patternProperties: {
      "^.*$": {
        type: JsonSchemaType.STRING,
      },
    },
  },
};
