import { JsonSchemaType } from "../../../../../schema";
import { NotificationResponseItemSchema } from "./response-item";

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
