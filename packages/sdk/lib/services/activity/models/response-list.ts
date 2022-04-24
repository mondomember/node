import { JsonSchemaType } from "../../../schema";
import {
  ActivityResponseItemSchema,
  ActivityResponseItemInterface,
} from "./response-item";

export const ActivityResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: ActivityResponseItemSchema,
    },
  },
};

export interface ActivityResponseListInterface {
  items?: ActivityResponseItemInterface[];
}
