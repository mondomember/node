import { matchers } from "jest-json-schema";
import { TenantInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Workspace as WorkspaceTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Workspace Tenant - Create Item Schema", () => {
  test("succeed with name", async () => {
    const payload = {
      ...WorkspaceTests.createTestInsertTenant(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail null name", async () => {
    const payload = {
      ...WorkspaceTests.createTestInsertTenant(),
      name: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty name", async () => {
    const payload = {
      ...WorkspaceTests.createTestInsertTenant(),
      name: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...WorkspaceTests.createTestInsertTenant(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
