import { matchers } from "jest-json-schema";
import { WorkspaceTokenResponseItemSchema as Schema } from "./response-item";
import { Integration as IntegrationTests } from "@mondomember/test";

expect.extend(matchers);

describe("Integration Workspace Token - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...IntegrationTests.createTestWorkspaceToken(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...IntegrationTests.createTestWorkspaceToken(),
      id: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without label", async () => {
    const payload = {
      ...IntegrationTests.createTestWorkspaceToken(),
      label: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
