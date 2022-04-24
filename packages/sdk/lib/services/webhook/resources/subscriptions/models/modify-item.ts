import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  UrlPropertySchema,
  UrlPropertyInterface,
  EventsPropertySchema,
  EventsPropertyInterface,
  LabelPropertySchema,
  LabelPropertyInterface,
  AuthPropertySchema,
  AuthPropertyInterface,
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

export interface SubscriptionModifyItemInterface
  extends Partial<EventsPropertyInterface>,
    Partial<UrlPropertyInterface>,
    Partial<LabelPropertyInterface>,
    Partial<AuthPropertyInterface> {}
