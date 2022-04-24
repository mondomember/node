import { matchers } from "jest-json-schema";
import { WorkspaceUserAuthenticationResponseListSchema as Schema } from "./response-list";
import { Account } from "@mondomember/test";

expect.extend(matchers);

describe("Account Workspace User Authentication - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        Account.createTestUserAuthentication(),
        Account.createTestUserAuthentication(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
