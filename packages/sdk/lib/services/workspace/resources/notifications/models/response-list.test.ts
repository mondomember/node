import { matchers } from "jest-json-schema";
import { NotificationResponseListSchema as Schema } from "./response-list";
import { Workspace } from "@mondomember/test";

expect.extend(matchers);

describe("Workspace Workspace Notification - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        Workspace.createTestNotification(),
        Workspace.createTestNotification(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
