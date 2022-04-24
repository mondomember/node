import { JsonSchemaType } from "../../../../../schema";
import {
  ChargeResponseItemSchema,
  ChargeResponseItemInterface,
} from "./response-item";

export const ChargeResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: ChargeResponseItemSchema,
    },
  },
};

export interface ChargeResponseListInterface {
  items?: ChargeResponseItemInterface[];
}
