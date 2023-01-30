import { JsonSchemaType } from "../../../../../schema";
import {
  MessagePropertySchema,
  TitlePropertySchema,
  TypePropertySchema,
} from "./base";

export const NotificationModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...TitlePropertySchema,
    ...MessagePropertySchema,
    ...TypePropertySchema,
  },
};
