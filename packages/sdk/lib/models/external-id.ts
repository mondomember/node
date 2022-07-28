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

export const ExternalIdPropertySchema = {
  externalIds: ExternalIdSchema,
};

export interface ExternalIdsInterface {
  [k: string]: string | number;
}

export interface ExternalIdsPropertyInterface {
  externalIds: ExternalIdsInterface;
}
