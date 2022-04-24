import { JsonSchemaType } from "../../../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../../../models";
import { UIDPrefix } from "../../../../../constants";
import { AnyNotificationType, NotificationTypeEnum } from ".";

export const NotificationIdSchema = constructUIDSchema([
  UIDPrefix.NOTIFICATION,
]);

export const NotificationIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.NOTIFICATION
);

export const MessagePropertySchema = {
  message: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export interface MessagePropertyInterface {
  message: string;
}

export const TitlePropertySchema = {
  title: {
    type: JsonSchemaType.STRING,
  },
};

export interface TitlePropertyInterface {
  title: string;
}

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: NotificationTypeEnum,
    minLength: 1,
  },
};

export interface TypePropertyInterface {
  type: AnyNotificationType;
}
