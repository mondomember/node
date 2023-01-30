import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  UrlPropertySchema,
  EventsPropertySchema,
  LabelPropertySchema,
  AuthPropertySchema,
} from "./base";

export const SubscriptionModifyItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...EventsPropertySchema,
    ...UrlPropertySchema,
    ...LabelPropertySchema,
    ...AuthPropertySchema,
  },
};
