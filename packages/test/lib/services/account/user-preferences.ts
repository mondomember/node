import { Chance } from "chance";

import { Account } from "@mondomember/sdk";

const chance: Chance.Chance = new Chance();

const ViewsProperty = {
  views: {
    [chance.word()]: {
      columns: [chance.word(), chance.word(), chance.word()],
    },
    [chance.word()]: {
      columns: [chance.word(), chance.word(), chance.word()],
    },
  },
};

export function createTestUserPreferences(
  overides?: Partial<Account.WorkspacePreferencesResponseItemInterface>
): Account.WorkspacePreferencesResponseItemInterface {
  return {
    ...ViewsProperty,
    ...overides,
  };
}

export function createTestUpsertUserPreferences(
  overides?: Partial<Account.WorkspacePreferencesUpsertItemInterface>
): Account.WorkspacePreferencesUpsertItemInterface {
  return {
    ...ViewsProperty,
    ...overides,
  };
}
