import { Chance } from "chance";

import { Workspace } from "@mondomember/sdk";

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

export function createTestPreferences(
  overides?: Partial<Workspace.PreferencesResponseItemInterface>
): Workspace.PreferencesResponseItemInterface {
  return {
    ...ViewsProperty,
    ...overides,
  };
}

export function createTestUpsertPreferences(
  overides?: Partial<Workspace.PreferencesUpsertItemInterface>
): Workspace.PreferencesUpsertItemInterface {
  return {
    ...ViewsProperty,
    ...overides,
  };
}
