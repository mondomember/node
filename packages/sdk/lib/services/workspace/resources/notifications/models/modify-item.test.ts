import { matchers } from "jest-json-schema";
import { NotificationModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Workspace as WorkspaceTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Workspace Workspace Notification - Update Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyNotification(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyNotification(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null message", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyNotification(),
      message: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty message", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyNotification(),
      message: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null type", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyNotification(),
      type: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty type", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyNotification(),
      type: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with improper Type", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyNotification(),
      type: "Test",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyNotification(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
