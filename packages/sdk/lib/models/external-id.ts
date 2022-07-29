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

export type ExternalIdValue = string | number;

export interface ExternalIdsInterface {
  [k: string]: ExternalIdValue;
}

export interface ExternalIdsArrayInterface {
  [k: string]: ExternalIdValue[] | Set<ExternalIdValue>;
}

export interface ExternalIdsPropertyInterface {
  externalIds: ExternalIdsInterface | ExternalIdsArrayInterface;
}

export interface ExternalIdsArrayPropertyInterface {
  externalIds: ExternalIdsArrayInterface;
}
