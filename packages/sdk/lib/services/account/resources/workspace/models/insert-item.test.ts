import { matchers } from "jest-json-schema";
import { WorkspaceTenantInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Account } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Account Tenant - Create Item Schema", () => {
  test("succeed with name", async () => {
    const payload = {
      ...Account.createTestInsertTenant(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail null name", async () => {
    const payload = {
      ...Account.createTestInsertTenant(),
      name: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty name", async () => {
    const payload = {
      ...Account.createTestInsertTenant(),
      name: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Account.createTestInsertTenant(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
