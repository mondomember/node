import { matchers } from "jest-json-schema";
import { SettingsResponseSchema as Schema } from "./response";
import { Settings } from "@mondomember/test";

expect.extend(matchers);

describe("Common Settings - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      "SOME.RESOURCE": {
        groups: [
          {
            ...Settings.createTestFieldGroup(),
            ...{
              fields: [Settings.createTestField(), Settings.createTestField()],
            },
          },
        ],
      },
    };

    expect(payload).toMatchSchema(Schema);
  });
});
