import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDSchema,
  constructUIDPropertySchema,
} from "../../../../../models";
import { UIDPrefix } from "../../../constants";
import { AuthType } from "./interfaces";

export const SubscriptionIdSchema = constructUIDSchema([
  UIDPrefix.SUBSCRIPTION,
]);

export const SubscriptionIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.SUBSCRIPTION
);

export const EventsSchema = {
  type: JsonSchemaType.ARRAY,
  items: {
    type: JsonSchemaType.STRING,
  },
};

export const EventsPropertySchema = {
  events: EventsSchema,
};

export type EventsType = string[];

export interface EventsPropertyInterface {
  events: EventsType;
}

export const UrlSchema = {
  type: JsonSchemaType.STRING,
};

export const UrlPropertySchema = {
  url: UrlSchema,
};

export type UrlType = string;

export interface UrlPropertyInterface {
  url: UrlType;
}

export const LabelSchema = {
  type: JsonSchemaType.STRING,
};

export const LabelPropertySchema = {
  label: LabelSchema,
};

export type LabelType = string;

export interface LabelPropertyInterface {
  label: LabelType;
}

const BasicAuthSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "username", "password"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [AuthType.BASIC],
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

type BasicAuth = {
  type: typeof AuthType.BASIC;
  username: string;
  password: string;
};

export type AuthType = BasicAuth;

export interface AuthPropertyInterface {
  auth: AuthType;
}
