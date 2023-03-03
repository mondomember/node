import { JsonSchemaType, JsonSchema } from "../../../../../../../schema";

export const HubSpotAppUpsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["code"],
  properties: {
    code: {
      type: JsonSchemaType.STRING,
      minLength: 1,
    },
  },
};

export const AppUpsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [HubSpotAppUpsertItemSchema],
};
