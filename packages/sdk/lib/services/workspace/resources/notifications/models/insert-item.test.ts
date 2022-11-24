import { matchers } from "jest-json-schema";
import { NotificationInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Workspace } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Workspace Workspace Notification - Create Item Schema", () => {
  test("succeed with payload", async () => {
    const payload = {
      ...Workspace.createTestInsertNotification(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with improper Type", async () => {
    const payload = {
      ...Workspace.createTestInsertNotification(),
      type: "Test",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without message", async () => {
    const payload = {
      ...Workspace.createTestInsertNotification(),
      message: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Workspace.createTestInsertNotification(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
