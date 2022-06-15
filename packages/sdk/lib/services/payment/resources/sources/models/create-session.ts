import { JsonSchemaType } from "../../../../../schema";
import {
  CustomerPropertyRequestSchema,
  CustomerPropertyRequestInterface,
} from "../../../../crm";
import { GatewayInterface, GatewaySchema } from "./base";

export const SourceSessionInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["customer", "gateway"],
  properties: {
    ...CustomerPropertyRequestSchema,
    ...GatewaySchema,
  },
};

export interface SourceSessionInsertItemInterface
  extends CustomerPropertyRequestInterface,
    GatewayInterface {}
