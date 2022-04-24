export const Action = {
  READ: "read",
  WRITE: "write",
} as const;

export type AnyAction = typeof Action[keyof typeof Action];

export const ActionEnum = [Action.READ, Action.WRITE];

export const AuthorizationService = {
  CRM: "crm",
  BILLING: "billing",
  MEMBERSHIP: "membership",
  PAYMENT: "payment",
  SEARCH: "search",
} as const;

export type AnyAuthorizationService =
  typeof AuthorizationService[keyof typeof AuthorizationService];

export interface ResourceAuthorizations {
  "*"?: AnyAction;
  [key: string]: AnyAction | undefined;
}

export interface ServiceAuthorizations {
  [key: string]: ResourceAuthorizations | undefined;
}
