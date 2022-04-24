import { matchers } from "jest-json-schema";
import { CompanyInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { CRM } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("CRM Company - Create Item Schema", () => {
  test("succeed with name", async () => {
    const payload = CRM.createTestInsertCompany();

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without name", async () => {
    const payload = CRM.createTestInsertCompany({ name: undefined });

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty name", async () => {
    const payload = CRM.createTestInsertCompany({ name: "" });

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with null name", async () => {
    const payload = {
      ...CRM.createTestInsertCompany(),
      ...{ name: null },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...CRM.createTestInsertCompany(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
