import { matchers } from "jest-json-schema";
import { UserInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Workspace as WorkspaceTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Workspace Workspace User - Create Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...WorkspaceTests.createTestInsertUser(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with improper email", async () => {
    const payload = {
      ...WorkspaceTests.createTestInsertUser(),
      email: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null email", async () => {
    const payload = {
      ...WorkspaceTests.createTestInsertUser(),
      email: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty email", async () => {
    const payload = {
      ...WorkspaceTests.createTestInsertUser(),
      email: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...WorkspaceTests.createTestInsertUser(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
