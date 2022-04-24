import { matchers } from "jest-json-schema";
import { WorkspaceUserAuthenticationResponseItemSchema as Schema } from "./response-item";
import { Account } from "@mondomember/test";

expect.extend(matchers);

describe("Account Workspace User Authentication - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Account.createTestUserAuthentication(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
