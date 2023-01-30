import { matchers } from "jest-json-schema";
import { WorkspaceTokenResponseListSchema as Schema } from "./response-list";
import { Integration as IntegrationTests } from "@mondomember/test";

expect.extend(matchers);

describe("Integration Workspace Token - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        IntegrationTests.createTestWorkspaceToken(),
        IntegrationTests.createTestWorkspaceToken(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
