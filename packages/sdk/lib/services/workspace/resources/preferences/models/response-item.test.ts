import { matchers } from "jest-json-schema";
import { Workspace as WorkspaceTests } from "@mondomember/test";

import { PreferencesResponseItemSchema as Schema } from "./response-item";
import { Chance } from "chance";

const chance: Chance.Chance = new Chance();

expect.extend(matchers);

describe("Workspace Workspace Preferences - Response Item Schema", () => {
  test("succeed with standard payload", async () => {
    const payload = {
      ...WorkspaceTests.createTestPreferences(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...WorkspaceTests.createTestPreferences(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
