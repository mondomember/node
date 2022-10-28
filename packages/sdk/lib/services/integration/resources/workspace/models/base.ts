import { constructJWTSchema, constructUIDSchema } from "../../../../../models";
import { JsonSchemaType } from "../../../../../schema";
import { UIDPrefix } from "../../../constants";

import { ActionEnum, AuthorizationService } from "../../../interfaces";
import {
  WorkspaceActivityAuthorizations,
  WorkspaceBillingAuthorizations,
  WorkspaceCRMAuthorizations,
  WorkspaceMembershipAuthorizations,
  WorkspacePaymentAuthorizations,
  WorkspaceSearchAuthorizations,
  WorkspaceSettingsAuthorizations,
  WorkspaceWebhookAuthorizations,
} from "./interfaces";

export const WorkspaceTokenSchema = constructJWTSchema();

export const WorkspaceIdSchema = constructUIDSchema([
  UIDPrefix.WORKSPACE_TOKEN,
]);

export const IdPropertySchema = {
  id: WorkspaceIdSchema,
};

export interface IdPropertyInterface {
  id: string;
}

export const TokenPropertySchema = {
  jwt: WorkspaceTokenSchema,
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
    [AuthorizationService.ACTIVITY]?: WorkspaceActivityAuthorizations;
    [AuthorizationService.BILLING]?: WorkspaceBillingAuthorizations;
    [AuthorizationService.CRM]?: WorkspaceCRMAuthorizations;
    [AuthorizationService.MEMBERSHIP]?: WorkspaceMembershipAuthorizations;
    [AuthorizationService.PAYMENT]?: WorkspacePaymentAuthorizations;
    [AuthorizationService.SEARCH]?: WorkspaceSearchAuthorizations;
    [AuthorizationService.SETTINGS]?: WorkspaceSettingsAuthorizations;
    [AuthorizationService.WEBHOOK]?: WorkspaceWebhookAuthorizations;
  };
}
