import { matchers } from "jest-json-schema";
import { WorkspaceTokenInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Integration } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Integration Workspace Token - Create Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...Integration.createTestInsertWorkspaceToken(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with improper label", async () => {
    const payload = {
      ...Integration.createTestInsertWorkspaceToken(),
      label: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null label", async () => {
    const payload = {
      ...Integration.createTestInsertWorkspaceToken(),
      label: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty label", async () => {
    const payload = {
      ...Integration.createTestInsertWorkspaceToken(),
      label: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Integration.createTestInsertWorkspaceToken(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
