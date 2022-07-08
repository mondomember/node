import { constructJWTSchema, constructUIDSchema } from "../../../../../models";
import { JsonSchemaType } from "../../../../../schema";
import { UIDPrefix } from "../../../constants";

import { ActionEnum, AuthorizationService } from "../../../interfaces";
import {
  ServerSideCRMAuthorizations,
  ServerSideMembershipAuthorizations,
  ServerSidePaymentAuthorizations,
  ServerSideSearchAuthorizations,
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

export const SearchAuthorizationsSchema = {
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
      [AuthorizationService.CRM]: CRMAuthorizationsSchema,
      [AuthorizationService.MEMBERSHIP]: MembershipAuthorizationsSchema,
      [AuthorizationService.PAYMENT]: PaymentAuthorizationsSchema,
      [AuthorizationService.SEARCH]: SearchAuthorizationsSchema,
    },
  },
};

export interface AuthorizationsPropertyInterface {
  authorizations: {
    [AuthorizationService.CRM]?: ServerSideCRMAuthorizations;
    [AuthorizationService.MEMBERSHIP]?: ServerSideMembershipAuthorizations;
    [AuthorizationService.PAYMENT]?: ServerSidePaymentAuthorizations;
    [AuthorizationService.SEARCH]?: ServerSideSearchAuthorizations;
  };
}
