import { matchers } from "jest-json-schema";
import { WorkspaceTenantModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Account } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Account Tenant - Update Item Schema", () => {
  test("succeed with name", async () => {
    const payload = {
      ...Account.createTestModifyTenant(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...Account.createTestModifyTenant(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null name", async () => {
    const payload = {
      ...Account.createTestModifyTenant(),
      name: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty name", async () => {
    const payload = {
      ...Account.createTestModifyTenant(),
      name: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Account.createTestModifyTenant(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
