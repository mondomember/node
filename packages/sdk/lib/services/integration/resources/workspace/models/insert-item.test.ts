import { matchers } from "jest-json-schema";
import { WorkspaceTokenInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Integration as IntegrationTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Integration Workspace Token - Create Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...IntegrationTests.createTestInsertWorkspaceToken(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with improper label", async () => {
    const payload = {
      ...IntegrationTests.createTestInsertWorkspaceToken(),
      label: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null label", async () => {
    const payload = {
      ...IntegrationTests.createTestInsertWorkspaceToken(),
      label: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty label", async () => {
    const payload = {
      ...IntegrationTests.createTestInsertWorkspaceToken(),
      label: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...IntegrationTests.createTestInsertWorkspaceToken(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
