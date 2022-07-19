import { constructJWTSchema, constructUIDSchema } from "../../../../../models";
import { JsonSchemaType } from "../../../../../schema";
import { UIDPrefix } from "../../../constants";

import { Action, ActionEnum, AuthorizationService } from "../../../interfaces";
import {
  ServerSideAccountAuthorizations,
  ServerSideActivityAuthorizations,
  ServerSideBillingAuthorizations,
  ServerSideCRMAuthorizations,
  ServerSideMembershipAuthorizations,
  ServerSidePaymentAuthorizations,
  ServerSideSearchAuthorizations,
  ServerSideSettingsAuthorizations,
  ServerSideWebhookAuthorizations,
} from "./interfaces";

export const ServerSideTokenSchema = constructJWTSchema();

export const ServerSideIdSchema = constructUIDSchema([
  UIDPrefix.SERVER_SIDE_TOKEN,
]);

export const IdPropertySchema = {
  id: ServerSideIdSchema,
};

export interface IdPropertyInterface {
  id: string;
}

export const TokenPropertySchema = {
  jwt: ServerSideTokenSchema,
};

export interface TokenPropertyInterface {
  jwt: string;
}

export const LabelPropertySchema = {
  label: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export interface LabelPropertyInterface {
  label: string;
}

export const DescriptionPropertySchema = {
  description: {
    type: JsonSchemaType.STRING,
  },
};

export interface DescriptionPropertyInterface {
  description: string;
}

export const AccountAuthorizationsSchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    "*": {
      type: JsonSchemaType.STRING,
      enum: [Action.READ],
    },
    settings: {
      type: JsonSchemaType.STRING,
      enum: [Action.READ],
    },
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

export const CRMAuthorizationsSchema = {
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
      [AuthorizationService.ACCOUNT]: AccountAuthorizationsSchema,
      [AuthorizationService.ACTIVITY]: ActivityAuthorizationsSchema,
      [AuthorizationService.BILLING]: BillingAuthorizationsSchema,
      [AuthorizationService.CRM]: CRMAuthorizationsSchema,
      [AuthorizationService.IMPORT]: ImportAuthorizationsSchema,
      [AuthorizationService.MEMBERSHIP]: MembershipAuthorizationsSchema,
      [AuthorizationService.PAYMENT]: PaymentAuthorizationsSchema,
      [AuthorizationService.SEARCH]: SearchAuthorizationsSchema,
      [AuthorizationService.SETTINGS]: SettingsAuthorizationsSchema,
      [AuthorizationService.WEBHOOK]: WebhookAuthorizationsSchema,
    },
  },
};

export interface AuthorizationsPropertyInterface {
  authorizations: {
    [AuthorizationService.ACCOUNT]?: ServerSideAccountAuthorizations;
    [AuthorizationService.ACTIVITY]?: ServerSideActivityAuthorizations;
    [AuthorizationService.BILLING]?: ServerSideBillingAuthorizations;
    [AuthorizationService.CRM]?: ServerSideCRMAuthorizations;
    [AuthorizationService.MEMBERSHIP]?: ServerSideMembershipAuthorizations;
    [AuthorizationService.PAYMENT]?: ServerSidePaymentAuthorizations;
    [AuthorizationService.SEARCH]?: ServerSideSearchAuthorizations;
    [AuthorizationService.SETTINGS]?: ServerSideSettingsAuthorizations;
    [AuthorizationService.WEBHOOK]?: ServerSideWebhookAuthorizations;
  };
}
