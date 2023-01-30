import { JsonSchemaType } from "../schema";

export const ExternalIdSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  patternProperties: {
    "^.*$": {
      type: [JsonSchemaType.STRING, JsonSchemaType.NUMBER],
    },
  },
  maxProperties: 10,
};

export const ExternalIdArraySchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  patternProperties: {
    "^.*$": {
      type: JsonSchemaType.ARRAY,
      items: {
        type: [JsonSchemaType.STRING, JsonSchemaType.NUMBER],
      },
    },
  },
  maxProperties: 10,
};

export const ExternalIdArrayPropertySchema = {
  externalIds: ExternalIdArraySchema,
};

export const ExternalIdPropertySchema = {
  externalIds: {
    type: JsonSchemaType.OBJECT,
    oneOf: [ExternalIdSchema, ExternalIdArraySchema],
  },
};
