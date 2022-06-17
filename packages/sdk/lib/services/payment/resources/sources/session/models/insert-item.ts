import { JsonSchemaType } from "../../../../../../schema";
import {
  CustomerPropertyRequestSchema,
  CustomerPropertyRequestInterface,
} from "../../../../../crm";
import { GatewayInterface, GatewaySchema } from "../../models/base";

export const SourceSessionInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["customer", "gateway"],
  properties: {
    ...CustomerPropertyRequestSchema,
    ...GatewaySchema,
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

export interface SourceSessionInsertItemInterface
  extends CustomerPropertyRequestInterface,
    GatewayInterface {
  options?: Record<string, string>;
}
