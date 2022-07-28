import { JsonSchemaType } from "../../../../../schema";

export const NamePropertySchema = {
  name: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export interface NamePropertyInterface {
  name: string;
}

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

export interface AppPropertyInterface {
  app?: { uiVersion?: string };
}

const IntegrationSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["label"],
  label: {
    type: JsonSchemaType.STRING,
  },
  url: {
    type: JsonSchemaType.STRING,
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

interface IntegrationInterface {
  label: string;
  url?: string;
}

export interface IntegrationsPropertyInterface {
  integrations: { [key: string]: IntegrationInterface };
}

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

export interface BrandingPropertyInterface {
  branding: { [key: string]: string };
}
