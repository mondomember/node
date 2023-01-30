import { matchers } from "jest-json-schema";
import { NotificationResponseListSchema as Schema } from "./response-list";
import { Workspace as WorkspaceTests } from "@mondomember/test";

expect.extend(matchers);

describe("Workspace Workspace Notification - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        WorkspaceTests.createTestNotification(),
        WorkspaceTests.createTestNotification(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
