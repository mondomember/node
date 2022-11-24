import { matchers } from "jest-json-schema";
import { UserResponseListSchema as Schema } from "./response-list";
import { Workspace } from "@mondomember/test";

expect.extend(matchers);

describe("Workspace Workspace User - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [Workspace.createTestUser(), Workspace.createTestUser()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
