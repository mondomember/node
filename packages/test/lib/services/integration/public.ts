import { Chance } from "chance";
import { Integration } from "@mondomember/sdk";

import { generateTestKSUID } from "../../utils";

const chance: Chance.Chance = new Chance();

const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const TokenProperty = {
  jwt: JWT,
};

export function createTestInsertPublicToken(
  overrides?: Partial<Integration.PublicTokenCreateItemInterface>
): Integration.PublicTokenCreateItemInterface {
  return {
    deviceId: generateTestKSUID(Integration.UIDPrefix.PUBLIC_TOKEN_DEVICE),
    token: chance.string({ length: 32 }),
    ...overrides,
  };
}

export function createTestPublicToken(): Integration.PublicTokenResponseItemInterface {
  return {
    ...TokenProperty,
    deviceId: generateTestKSUID(Integration.UIDPrefix.PUBLIC_TOKEN_DEVICE),
  };
}
