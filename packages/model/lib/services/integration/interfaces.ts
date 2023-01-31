export const Action = {
  READ: "read",
  WRITE: "write",
} as const;

export type AnyAction = typeof Action[keyof typeof Action];

export const AuthorizationService = {
  ACTIVITY: "activity",
  CUSTOMER: "customer",
  BILLING: "billing",
  IMPORT: "import",
  MEMBERSHIP: "membership",
  PAYMENT: "payment",
  SEARCH: "search",

  WEBHOOK: "webhook",
  SETTINGS: "settings",
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
