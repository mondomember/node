import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import { DeviceIdPropertySchema, TokenPropertySchema } from "./base";

export const PublicTokenResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...DeviceIdPropertySchema,
    ...TokenPropertySchema,
  },
};
