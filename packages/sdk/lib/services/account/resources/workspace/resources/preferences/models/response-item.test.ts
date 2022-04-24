import { matchers } from "jest-json-schema";
import { Account } from "@mondomember/test";

import { WorkspacePreferencesResponseItemSchema as Schema } from "./response-item";
import { Chance } from "chance";

const chance: Chance.Chance = new Chance();

expect.extend(matchers);

describe("Account Workspace Preferences - Response Item Schema", () => {
  test("succeed with standard payload", async () => {
    const payload = {
      ...Account.createTestUserPreferences(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Account.createTestUserPreferences(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
