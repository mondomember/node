import {
  Action,
  AnyAction,
  AuthorizationService,
  ResourceAuthorizations,
  ServiceAuthorizations,
} from "../../../interfaces";

export interface ServerSideBillingAuthorizations
  extends ResourceAuthorizations {
  invoices?: AnyAction;
}

export interface ServerSideCRMAuthorizations extends ResourceAuthorizations {
  companies?: AnyAction;
  contacts?: AnyAction;
  "company-contacts"?: AnyAction;
}

export interface ServerSideMembershipAuthorizations
  extends ResourceAuthorizations {
  contracts?: AnyAction;
  invoices?: AnyAction;
  memberships?: AnyAction;
  products?: AnyAction;
}

export interface ServerSidePaymentAuthorizations
  extends ResourceAuthorizations {
  gateways?: AnyAction;
  sources?: AnyAction;
}

export interface ServerSideImportAuthorizations extends ResourceAuthorizations {
  uploads?: AnyAction;
  jobs?: AnyAction;
}
export interface ServerSideSearchAuthorizations extends ResourceAuthorizations {
  "*"?: typeof Action.READ;
}

export interface ServerSideAccountAuthorizations
  extends ResourceAuthorizations {
  "*"?: typeof Action.READ;
}

export interface ServerSideActivityAuthorizations
  extends ResourceAuthorizations {}

export interface ServerSideWebhookAuthorizations
  extends ResourceAuthorizations {}

export interface ServerSideSettingsAuthorizations
  extends ResourceAuthorizations {
  app?: AnyAction;
  properties?: AnyAction;
}

export interface ServerSideAuthorizations extends ServiceAuthorizations {
  [AuthorizationService.ACCOUNT]?: ServerSideAccountAuthorizations;
  [AuthorizationService.ACTIVITY]?: ServerSideActivityAuthorizations;
  [AuthorizationService.BILLING]?: ServerSideBillingAuthorizations;
  [AuthorizationService.CRM]?: ServerSideCRMAuthorizations;
  [AuthorizationService.IMPORT]?: ServerSideImportAuthorizations;
  [AuthorizationService.MEMBERSHIP]?: ServerSideMembershipAuthorizations;
  [AuthorizationService.PAYMENT]?: ServerSidePaymentAuthorizations;
  [AuthorizationService.SEARCH]?: ServerSideSearchAuthorizations;
  [AuthorizationService.SETTINGS]?: ServerSideSettingsAuthorizations;
  [AuthorizationService.WEBHOOK]?: ServerSideWebhookAuthorizations;
}
