import { JsonSchemaType } from "../../../../../../schema";
import { CustomerPropertyRequestSchema } from "../../../../../customer";
import { GatewayPropertySchema } from "../../models/base";

export const SourceSessionInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["customer", "gateway"],
  properties: {
    ...CustomerPropertyRequestSchema,
    ...GatewayPropertySchema,
    options: {
      type: JsonSchemaType.OBJECT,
      additionalProperties: false,
      patternProperties: {
        "^.*$": {
          type: [
            JsonSchemaType.STRING,
            JsonSchemaType.NUMBER,
            JsonSchemaType.NULL,
            JsonSchemaType.OBJECT,
          ],
        },
      },
    },
  },
};
