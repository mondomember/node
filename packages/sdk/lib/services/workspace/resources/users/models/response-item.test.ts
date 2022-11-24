import { matchers } from "jest-json-schema";
import { UserResponseItemSchema as Schema } from "./response-item";
import { Workspace } from "@mondomember/test";

expect.extend(matchers);

describe("Workspace Workspace User - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Workspace.createTestUser(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...Workspace.createTestUser(),
      id: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without email", async () => {
    const payload = {
      ...Workspace.createTestUser(),
      email: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
