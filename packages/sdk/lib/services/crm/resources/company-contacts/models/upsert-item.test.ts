import { matchers } from "jest-json-schema";
import { CompanyContactUpsertItemSchema as Schema } from "./upsert-item";
import { Chance } from "chance";
import { CRM } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("CRM Company Contact - Create Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...CRM.createTestUpsertCompanyContact(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...CRM.createTestUpsertCompanyContact(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with contact info", async () => {
    const payload = {
      ...CRM.createTestUpsertCompanyContact(),
      contact: {
        email: chance.email(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with company info", async () => {
    const payload = {
      ...CRM.createTestUpsertCompanyContact(),
      company: {
        name: chance.company(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...CRM.createTestUpsertCompanyContact(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
