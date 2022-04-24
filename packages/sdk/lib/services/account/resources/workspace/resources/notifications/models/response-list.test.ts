import { matchers } from "jest-json-schema";
import { NotificationResponseListSchema as Schema } from "./response-list";
import { Account } from "@mondomember/test";

expect.extend(matchers);

describe("Account Workspace Notification - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        Account.createTestUserNotification(),
        Account.createTestUserNotification(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
