import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { NotificationTypeEnum } from "./interfaces";
import { Workspace } from "@mondomember/model";

export const NotificationIdSchema = constructUIDSchema([
  Workspace.UIDPrefix.NOTIFICATION,
]);

export const NotificationIdPropertySchema = constructUIDPropertySchema(
  Workspace.UIDPrefix.NOTIFICATION
);

export const MessagePropertySchema = {
  message: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export const TitlePropertySchema = {
  title: {
    type: JsonSchemaType.STRING,
  },
};

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: NotificationTypeEnum,
    minLength: 1,
  },
};
