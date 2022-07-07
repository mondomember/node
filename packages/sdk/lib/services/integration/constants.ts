export const TokenType = {
  SERVER_SIDE_TOKEN: "ssit",
  PUBLIC_TOKEN: "pbit",
} as const;

export const UIDPrefix = {
  SERVER_SIDE_TOKEN: TokenType.SERVER_SIDE_TOKEN,
  SERVER_SIDE_JWK: "ssik",
  PUBLIC_TOKEN_DEVICE: "pbid", // public token device
} as const;
