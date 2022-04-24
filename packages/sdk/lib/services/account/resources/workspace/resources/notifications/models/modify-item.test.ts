import { matchers } from "jest-json-schema";
import { NotificationModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Account } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Account Workspace Notification - Update Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Account.createTestModifyUserNotification(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...Account.createTestModifyUserNotification(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null message", async () => {
    const payload = {
      ...Account.createTestModifyUserNotification(),
      message: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty message", async () => {
    const payload = {
      ...Account.createTestModifyUserNotification(),
      message: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null type", async () => {
    const payload = {
      ...Account.createTestModifyUserNotification(),
      type: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty type", async () => {
    const payload = {
      ...Account.createTestModifyUserNotification(),
      type: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with improper Type", async () => {
    const payload = {
      ...Account.createTestModifyUserNotification(),
      type: "Test",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Account.createTestModifyUserNotification(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
