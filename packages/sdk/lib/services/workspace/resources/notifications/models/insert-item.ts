import { JsonSchemaType } from "../../../../../schema";
import { IdPropertyInterface } from "../../../../../models";
import {
  NotificationIdPropertySchema,
  MessagePropertySchema,
  MessagePropertyInterface,
  TitlePropertySchema,
  TitlePropertyInterface,
  TypePropertySchema,
  TypePropertyInterface,
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

export interface NotificationInsertItemInterface
  extends Partial<IdPropertyInterface>,
    TypePropertyInterface,
    MessagePropertyInterface,
    Partial<TitlePropertyInterface> {}
