import { constructJWTSchema, constructUIDSchema } from "../../../../../models";
import { JsonSchemaType } from "../../../../../schema";
import { ActionEnum } from "../../../interfaces";
import { Integration } from "@mondomember/model";

export const WorkspaceTokenSchema = constructJWTSchema();

export const WorkspaceIdSchema = constructUIDSchema([
  Integration.UIDPrefix.WORKSPACE_TOKEN,
]);

export const IdPropertySchema = {
  id: WorkspaceIdSchema,
};

export const TokenPropertySchema = {
  jwt: WorkspaceTokenSchema,
};

export const LabelPropertySchema = {
  label: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export const DescriptionPropertySchema = {
  description: {
    type: JsonSchemaType.STRING,
  },
};

export const ActivityAuthorizationsSchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    "*": {
      type: JsonSchemaType.STRING,
      enum: ActionEnum,
    },
  },
};

export const BillingAuthorizationsSchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    "*": {
      type: JsonSchemaType.STRING,
      enum: ActionEnum,
    },
  },
};

export const CustomerAuthorizationsSchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    "*": {
      type: JsonSchemaType.STRING,
      enum: ActionEnum,
    },
  },
};

export const MembershipAuthorizationsSchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    "*": {
      type: JsonSchemaType.STRING,
      enum: ActionEnum,
    },
  },
};

export const PaymentAuthorizationsSchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    "*": {
      type: JsonSchemaType.STRING,
      enum: ActionEnum,
    },
  },
};

export const ImportAuthorizationsSchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    "*": {
      type: JsonSchemaType.STRING,
      enum: ActionEnum,
    },
  },
};

export const SearchAuthorizationsSchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    "*": {
      type: JsonSchemaType.STRING,
      enum: ActionEnum,
    },
  },
};

export const SettingsAuthorizationsSchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    "*": {
      type: JsonSchemaType.STRING,
      enum: ActionEnum,
    },
  },
};

export const WebhookAuthorizationsSchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    "*": {
      type: JsonSchemaType.STRING,
      enum: ActionEnum,
    },
  },
};

export const AuthorizationsPropertySchema = {
  authorizations: {
    type: JsonSchemaType.OBJECT,
    properties: {
      [Integration.AuthorizationService.ACTIVITY]: ActivityAuthorizationsSchema,
      [Integration.AuthorizationService.BILLING]: BillingAuthorizationsSchema,
      [Integration.AuthorizationService.CUSTOMER]: CustomerAuthorizationsSchema,
      [Integration.AuthorizationService.IMPORT]: ImportAuthorizationsSchema,
      [Integration.AuthorizationService.MEMBERSHIP]:
        MembershipAuthorizationsSchema,
      [Integration.AuthorizationService.PAYMENT]: PaymentAuthorizationsSchema,
      [Integration.AuthorizationService.SEARCH]: SearchAuthorizationsSchema,
      [Integration.AuthorizationService.SETTINGS]: SettingsAuthorizationsSchema,
      [Integration.AuthorizationService.WEBHOOK]: WebhookAuthorizationsSchema,
    },
  },
};
