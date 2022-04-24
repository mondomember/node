import { JsonSchemaType, JsonSchema } from "../../../../../../schema";
import {
  FieldGroupResponseItemSchema,
  FieldGroupResponseItemInterface,
} from "./response-item";

export const FieldGroupResponseListSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: FieldGroupResponseItemSchema,
    },
  },
};

export interface FieldGroupResponseListInterface {
  items?: FieldGroupResponseItemInterface[];
}
