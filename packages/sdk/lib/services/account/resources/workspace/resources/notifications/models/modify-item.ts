import { JsonSchemaType } from "../../../../../../../schema";
import {
  MessagePropertySchema,
  MessagePropertyInterface,
  TitlePropertySchema,
  TitlePropertyInterface,
  TypePropertySchema,
  TypePropertyInterface,
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

export interface NotificationModifyItemInterface
  extends Partial<TitlePropertyInterface>,
    Partial<MessagePropertyInterface>,
    Partial<TypePropertyInterface> {}
