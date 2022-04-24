import { matchers } from "jest-json-schema";
import { NotificationInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Account } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Account Workspace Notification - Create Item Schema", () => {
  test("succeed with payload", async () => {
    const payload = {
      ...Account.createTestInsertUserNotification(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with improper Type", async () => {
    const payload = {
      ...Account.createTestInsertUserNotification(),
      type: "Test",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without message", async () => {
    const payload = {
      ...Account.createTestInsertUserNotification(),
      message: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Account.createTestInsertUserNotification(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
