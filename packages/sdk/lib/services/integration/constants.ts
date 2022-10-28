export const TokenType = {
  WORKSPACE_TOKEN: "wsit",
  PUBLIC_TOKEN: "pbit",
} as const;

export const UIDPrefix = {
  WORKSPACE_TOKEN: TokenType.WORKSPACE_TOKEN,
  WORKSPACE_JWK: "wsik",

  PUBLIC_TOKEN_DEVICE: "pbid", // public token device
} as const;
