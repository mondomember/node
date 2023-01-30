import { matchers } from "jest-json-schema";
import { TenantModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Workspace as WorkspaceTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Workspace Tenant - Update Item Schema", () => {
  test("succeed with name", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyTenant(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyTenant(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null name", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyTenant(),
      name: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty name", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyTenant(),
      name: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyTenant(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
