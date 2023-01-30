import { matchers } from "jest-json-schema";
import { CompanyContactResponseItemSchema as Schema } from "./response-item";
import { Customer as CustomerTests } from "@mondomember/test";

expect.extend(matchers);

describe("Customer - Company Contact Response Item Schema", () => {
  test("succeed with company and contact", async () => {
    const payload = {
      ...CustomerTests.createTestCompanyContact(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without contact info", async () => {
    const payload = {
      ...CustomerTests.createTestCompanyContact(),
      contact: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without company info", async () => {
    const payload = {
      ...CustomerTests.createTestCompanyContact(),
      company: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
