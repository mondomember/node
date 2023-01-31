import {
  Action,
  AnyAction,
  AuthorizationService,
  ResourceAuthorizations,
  ServiceAuthorizations,
} from "../interfaces";

export interface WorkspaceBillingAuthorizations extends ResourceAuthorizations {
  invoices?: AnyAction;
}

export interface WorkspaceCustomerAuthorizations
  extends ResourceAuthorizations {
  companies?: AnyAction;
  contacts?: AnyAction;
  "company-contacts"?: AnyAction;
}

export interface WorkspaceMembershipAuthorizations
  extends ResourceAuthorizations {
  contracts?: AnyAction;
  invoices?: AnyAction;
  memberships?: AnyAction;
  products?: AnyAction;
}

export interface WorkspacePaymentAuthorizations extends ResourceAuthorizations {
  gateways?: AnyAction;
  sources?: AnyAction;
}

export interface WorkspaceImportAuthorizations extends ResourceAuthorizations {
  uploads?: AnyAction;
  jobs?: AnyAction;
}
export interface WorkspaceSearchAuthorizations extends ResourceAuthorizations {
  "*"?: typeof Action.READ;
}

export interface WorkspaceActivityAuthorizations
  extends ResourceAuthorizations {}

export interface WorkspaceWebhookAuthorizations
  extends ResourceAuthorizations {}

export interface WorkspaceSettingsAuthorizations
  extends ResourceAuthorizations {
  app?: AnyAction;
  properties?: AnyAction;
}

export interface WorkspaceAuthorizations extends ServiceAuthorizations {
  [AuthorizationService.ACTIVITY]?: WorkspaceActivityAuthorizations;
  [AuthorizationService.BILLING]?: WorkspaceBillingAuthorizations;
  [AuthorizationService.CUSTOMER]?: WorkspaceCustomerAuthorizations;
  [AuthorizationService.IMPORT]?: WorkspaceImportAuthorizations;
  [AuthorizationService.MEMBERSHIP]?: WorkspaceMembershipAuthorizations;
  [AuthorizationService.PAYMENT]?: WorkspacePaymentAuthorizations;
  [AuthorizationService.SEARCH]?: WorkspaceSearchAuthorizations;
  [AuthorizationService.SETTINGS]?: WorkspaceSettingsAuthorizations;
  [AuthorizationService.WEBHOOK]?: WorkspaceWebhookAuthorizations;
}
