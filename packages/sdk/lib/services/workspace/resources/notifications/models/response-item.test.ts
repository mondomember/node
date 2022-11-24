import { matchers } from "jest-json-schema";
import { NotificationResponseItemSchema as Schema } from "./response-item";
import { Workspace } from "@mondomember/test";

expect.extend(matchers);

describe("Workspace Workspace Notification - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Workspace.createTestNotification(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...Workspace.createTestNotification(),
      ...{
        id: undefined,
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without message", async () => {
    const payload = {
      ...Workspace.createTestNotification(),
      ...{
        message: undefined,
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without type", async () => {
    const payload = {
      ...Workspace.createTestNotification(),
      ...{
        type: undefined,
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
