import { matchers } from "jest-json-schema";
import { UserResponseListSchema as Schema } from "./response-list";
import { Workspace as WorkspaceTests } from "@mondomember/test";

expect.extend(matchers);

describe("Workspace Workspace User - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [WorkspaceTests.createTestUser(), WorkspaceTests.createTestUser()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
