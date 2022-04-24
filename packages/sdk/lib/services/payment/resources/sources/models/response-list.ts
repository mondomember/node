import { JsonSchemaType } from "../../../../../schema";
import {
  SourceResponseItemSchema,
  SourceResponseItemInterface,
} from "./response-item";

export const SourceResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: SourceResponseItemSchema,
    },
  },
};

export interface SourceResponseListInterface {
  items?: SourceResponseItemInterface[];
}
