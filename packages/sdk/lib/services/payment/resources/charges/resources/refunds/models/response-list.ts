import { JsonSchemaType } from "../../../../../../../schema";
import {
  RefundResponseItemSchema,
  RefundResponseItemInterface,
} from "./response-item";

export const RefundResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: RefundResponseItemSchema,
    },
  },
};

export interface RefundResponseListInterface {
  items?: RefundResponseItemInterface[];
}
