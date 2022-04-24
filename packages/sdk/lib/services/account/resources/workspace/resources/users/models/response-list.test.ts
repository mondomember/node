import { matchers } from "jest-json-schema";
import { WorkspaceUserResponseListSchema as Schema } from "./response-list";
import { Account } from "@mondomember/test";

expect.extend(matchers);

describe("Account Workspace User - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [Account.createTestUser(), Account.createTestUser()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
