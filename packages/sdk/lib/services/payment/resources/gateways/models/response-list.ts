import { JsonSchemaType } from "../../../../../schema";
import {
  GatewayResponseItemSchema,
  GatewayResponseItemInterface,
} from "./response-item";

export const GatewayResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: GatewayResponseItemSchema,
    },
  },
};

export interface GatewayResponseListInterface {
  items?: GatewayResponseItemInterface[];
}
