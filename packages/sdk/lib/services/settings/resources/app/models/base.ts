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

interface IntegrationInterface {
  label: string;
  urls?: {
    [key: string]: string;
  };
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
