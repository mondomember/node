import { JsonSchema, JsonSchemaType } from "../../../../../../schema";
import {
  FieldResponseItemSchema,
  FieldResponseItemInterface,
} from "./response-item";

export const FieldResponseListSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: FieldResponseItemSchema,
    },
  },
};

export interface FieldResponseListInterface {
  items?: FieldResponseItemInterface[];
}
