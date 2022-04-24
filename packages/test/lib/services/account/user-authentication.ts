import { Chance } from "chance";
import { createCreatedAtProperty } from "../../utils";

import { Account } from "@mondomember/sdk";

const chance: Chance.Chance = new Chance();

const Type = {
  type: chance.word(),
};

const Risk = {
  risk: {
    decision: chance.word(),
    level: chance.word(),
  },
};

const Status = {
  status: chance.word(),
};

const Response = {
  response: chance.word(),
};

const LastLoginAt = {
  lastLoginAt: chance.date().toISOString(),
};

export function createTestUserAuthentication(
  props?: Partial<Account.WorkspaceUserAuthenticationResponseItemInterface>
): Account.WorkspaceUserAuthenticationResponseItemInterface {
  return {
    id: chance.guid(),
    ...Type,
    ...Risk,
    ...Status,
    ...Response,
    ...LastLoginAt,
    ...createCreatedAtProperty(),
    ...props,
  };
}
