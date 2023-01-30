import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDSchema,
  constructUIDPropertySchema,
} from "../../../../../models";
import { Webhook } from "@mondomember/model";

export const SubscriptionIdSchema = constructUIDSchema([
  Webhook.UIDPrefix.SUBSCRIPTION,
]);

export const SubscriptionIdPropertySchema = constructUIDPropertySchema(
  Webhook.UIDPrefix.SUBSCRIPTION
);

export const EventsSchema = {
  type: JsonSchemaType.ARRAY,
  items: {
    type: JsonSchemaType.STRING,
    enum: Object.values(Webhook.WebhookEvents),
  },
};

export const EventsPropertySchema = {
  events: EventsSchema,
};

export const UrlSchema = {
  type: JsonSchemaType.STRING,
};

export const UrlPropertySchema = {
  url: UrlSchema,
};

export const LabelSchema = {
  type: JsonSchemaType.STRING,
};

export const LabelPropertySchema = {
  label: LabelSchema,
};

const BasicAuthSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "username", "password"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Webhook.AuthType.BASIC],
    },
    username: {
      type: JsonSchemaType.STRING,
      minLength: 1,
    },
    password: {
      type: JsonSchemaType.STRING,
      minLength: 1,
    },
  },
};

export const AuthSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [BasicAuthSchema],
};

export const AuthPropertySchema = {
  auth: AuthSchema,
};
