import { matchers } from "jest-json-schema";
import { SettingsResponseSchema as Schema } from "./response";
import { Settings as SettingsTests } from "@mondomember/test";

expect.extend(matchers);

describe("Common Settings - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      "SOME.RESOURCE": {
        groups: [
          {
            ...SettingsTests.createTestFieldGroup(),
            ...{
              fields: [
                SettingsTests.createTestField(),
                SettingsTests.createTestField(),
              ],
            },
          },
        ],
      },
    };

    expect(payload).toMatchSchema(Schema);
  });
});
