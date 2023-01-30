import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
} from "../../../../../models";
import {
  UrlPropertySchema,
  EventsPropertySchema,
  LabelPropertySchema,
  AuthPropertySchema,
} from "./base";
import { Webhook } from "@mondomember/model";

export const SubscriptionResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "events", "url", "createdAt", "deletedAt"],
  properties: {
    ...constructUIDPropertySchema(Webhook.UIDPrefix.SUBSCRIPTION),
    ...EventsPropertySchema,
    ...UrlPropertySchema,
    ...LabelPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
    ...AuthPropertySchema,
  },
};
