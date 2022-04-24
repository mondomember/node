import { matchers } from "jest-json-schema";
import { WorkspaceUserResponseItemSchema as Schema } from "./response-item";
import { Account } from "@mondomember/test";

expect.extend(matchers);

describe("Account Workspace User - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Account.createTestUser(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...Account.createTestUser(),
      id: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without email", async () => {
    const payload = {
      ...Account.createTestUser(),
      email: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
