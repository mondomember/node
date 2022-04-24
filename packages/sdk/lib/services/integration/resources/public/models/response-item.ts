import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  DeviceIdPropertySchema,
  DeviceIdPropertyInterface,
  TokenPropertySchema,
  TokenPropertyInterface,
} from "./base";

export const PublicTokenResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...DeviceIdPropertySchema,
    ...TokenPropertySchema,
  },
};

export interface PublicTokenResponseItemInterface
  extends DeviceIdPropertyInterface,
    TokenPropertyInterface {}
