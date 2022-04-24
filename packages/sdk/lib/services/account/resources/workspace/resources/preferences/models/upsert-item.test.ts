import { matchers } from "jest-json-schema";
import { Account } from "@mondomember/test";

import { WorkspacePreferencesUpsertItemSchema as Schema } from "./upsert-item";
import { Chance } from "chance";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Account Workspace Preferences - Upsert Item Schema", () => {
  test("succeed with standard payload", async () => {
    const payload = {
      ...Account.createTestUpsertUserPreferences(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Account.createTestUpsertUserPreferences(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
