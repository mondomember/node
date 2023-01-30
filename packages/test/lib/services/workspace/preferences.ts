import { Chance } from "chance";

import { Workspace } from "@mondomember/model";

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
  overides?: Partial<Workspace.PreferencesResponseItem>
): Workspace.PreferencesResponseItem {
  return {
    ...ViewsProperty,
    ...overides,
  };
}

export function createTestUpsertPreferences(
  overides?: Partial<Workspace.PreferencesUpsertItem>
): Workspace.PreferencesUpsertItem {
  return {
    ...ViewsProperty,
    ...overides,
  };
}
