import { AuthorizationService } from "../interfaces";
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

export interface IdProperty {
  id: string;
}

export interface TokenProperty {
  jwt: string;
}

export interface LabelProperty {
  label: string;
}

export interface DescriptionProperty {
  description: string;
}

export interface AuthorizationsProperty {
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
