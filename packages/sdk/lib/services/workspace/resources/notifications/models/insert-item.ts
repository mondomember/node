import { JsonSchemaType } from "../../../../../schema";
import {
  NotificationIdPropertySchema,
  MessagePropertySchema,
  TitlePropertySchema,
  TypePropertySchema,
} from "./base";

export const NotificationInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["message", "type"],
  properties: {
    ...NotificationIdPropertySchema,
    ...TitlePropertySchema,
    ...MessagePropertySchema,
    ...TypePropertySchema,
  },
};
