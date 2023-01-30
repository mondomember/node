import { matchers } from "jest-json-schema";
import { CompanyContactUpsertItemSchema as Schema } from "./upsert-item";
import { Chance } from "chance";
import { Customer as CustomerTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Customer - Company Contact - Create Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...CustomerTests.createTestUpsertCompanyContact(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...CustomerTests.createTestUpsertCompanyContact(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with contact info", async () => {
    const payload = {
      ...CustomerTests.createTestUpsertCompanyContact(),
      contact: {
        email: chance.email(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with company info", async () => {
    const payload = {
      ...CustomerTests.createTestUpsertCompanyContact(),
      company: {
        name: chance.company(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...CustomerTests.createTestUpsertCompanyContact(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
