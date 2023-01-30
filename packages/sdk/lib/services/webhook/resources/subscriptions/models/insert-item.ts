import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import { constructUIDPropertySchema } from "../../../../../models";
import {
  UrlPropertySchema,
  EventsPropertySchema,
  LabelPropertySchema,
  AuthPropertySchema,
} from "./base";
import { Webhook } from "@mondomember/model";

export const SubscriptionInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["events", "url"],
  properties: {
    ...constructUIDPropertySchema(Webhook.UIDPrefix.SUBSCRIPTION),
    ...EventsPropertySchema,
    ...UrlPropertySchema,
    ...LabelPropertySchema,
    ...AuthPropertySchema,
  },
};
