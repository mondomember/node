import { JsonSchemaType } from "../../../../../schema";
import {
  NotificationResponseItemSchema,
  NotificationResponseItemInterface,
} from "./response-item";

export const NotificationResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: NotificationResponseItemSchema,
    },
  },
};
export interface NotificationResponseListInterface {
  items?: NotificationResponseItemInterface[];
}
