import { matchers } from "jest-json-schema";
import { NotificationResponseItemSchema as Schema } from "./response-item";
import { Account } from "@mondomember/test";

expect.extend(matchers);

describe("Account Workspace Notification - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Account.createTestUserNotification(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...Account.createTestUserNotification(),
      ...{
        id: undefined,
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without message", async () => {
    const payload = {
      ...Account.createTestUserNotification(),
      ...{
        message: undefined,
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without type", async () => {
    const payload = {
      ...Account.createTestUserNotification(),
      ...{
        type: undefined,
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
