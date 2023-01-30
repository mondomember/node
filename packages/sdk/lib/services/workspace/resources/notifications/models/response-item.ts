import { JsonSchemaType } from "../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
} from "../../../../../models";

import {
  NotificationIdPropertySchema,
  MessagePropertySchema,
  TitlePropertySchema,
  TypePropertySchema,
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
