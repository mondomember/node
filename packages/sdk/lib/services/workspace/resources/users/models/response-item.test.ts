import { matchers } from "jest-json-schema";
import { UserResponseItemSchema as Schema } from "./response-item";
import { Workspace as WorkspaceTests } from "@mondomember/test";

expect.extend(matchers);

describe("Workspace Workspace User - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...WorkspaceTests.createTestUser(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...WorkspaceTests.createTestUser(),
      id: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without email", async () => {
    const payload = {
      ...WorkspaceTests.createTestUser(),
      email: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
