import { matchers } from "jest-json-schema";
import { Workspace } from "@mondomember/test";

import { PreferencesUpsertItemSchema as Schema } from "./upsert-item";
import { Chance } from "chance";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Workspace Workspace Preferences - Upsert Item Schema", () => {
  test("succeed with standard payload", async () => {
    const payload = {
      ...Workspace.createTestUpsertPreferences(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Workspace.createTestUpsertPreferences(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
