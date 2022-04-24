import {
  AnyAction,
  AuthorizationService,
  ResourceAuthorizations,
  ServiceAuthorizations,
} from "../../../interfaces";

export interface ServerSideCRMAuthorizations extends ResourceAuthorizations {
  companies?: AnyAction;
  contacts?: AnyAction;
  companyContacts?: AnyAction;
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

export interface ServerSideSearchAuthorizations extends ResourceAuthorizations {
  global?: AnyAction;
}

export interface ServerSideAuthorizations extends ServiceAuthorizations {
  [AuthorizationService.CRM]?: ServerSideCRMAuthorizations;
  [AuthorizationService.MEMBERSHIP]?: ServerSideMembershipAuthorizations;
  [AuthorizationService.PAYMENT]?: ServerSidePaymentAuthorizations;
  [AuthorizationService.SEARCH]?: ServerSideSearchAuthorizations;
}
