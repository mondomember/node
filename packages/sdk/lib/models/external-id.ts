import { JsonSchemaType } from "../schema";

export const ExternalIdPropertySchema = {
  externalIds: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    patternProperties: {
      "^.*$": {
        type: [JsonSchemaType.STRING, JsonSchemaType.NUMBER],
      },
    },
    maxProperties: 10,
  },
};

export interface ExternalIdsPropertyInterface {
  externalIds: { [k: string]: string | number };
}
