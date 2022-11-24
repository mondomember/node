import { JsonSchemaType } from "../../../../../schema";
import {
  IdPropertyInterface,
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
  UpdatedAtPropertySchema,
  UpdatedAtPropertyInterface,
  DeletedAtPropertySchema,
  DeletedAtPropertyInterface,
  LastUpdatedPropertySchema,
  LastUpdatedPropertyInterface,
} from "../../../../../models";

import {
  NotificationIdPropertySchema,
  MessagePropertySchema,
  MessagePropertyInterface,
  TitlePropertySchema,
  TitlePropertyInterface,
  TypePropertySchema,
  TypePropertyInterface,
} from "./base";

export const NotificationResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "message", "type", "createdAt", "updatedAt"],
  properties: {
    ...NotificationIdPropertySchema,
    ...TitlePropertySchema,
    ...MessagePropertySchema,
    ...TypePropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface NotificationResponseItemInterface
  extends IdPropertyInterface,
    Partial<TitlePropertyInterface>,
    MessagePropertyInterface,
    TypePropertyInterface,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface> {}
