import { matchers } from "jest-json-schema";
import { WorkspaceTokenModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Integration } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Integration Workspace Token - Update Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...Integration.createTestModifyWorkspaceToken(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...Integration.createTestModifyWorkspaceToken(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null label", async () => {
    const payload = {
      ...Integration.createTestModifyWorkspaceToken(),
      label: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty label", async () => {
    const payload = {
      ...Integration.createTestModifyWorkspaceToken(),
      label: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Integration.createTestModifyWorkspaceToken(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
