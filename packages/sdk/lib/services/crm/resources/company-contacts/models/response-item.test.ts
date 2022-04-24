import { matchers } from "jest-json-schema";
import { CompanyContactResponseItemSchema as Schema } from "./response-item";
import { CRM } from "@mondomember/test";

expect.extend(matchers);

describe("CRM Company Contact Response Item Schema", () => {
  test("succeed with company and contact", async () => {
    const payload = {
      ...CRM.createTestCompanyContact(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without contact info", async () => {
    const payload = {
      ...CRM.createTestCompanyContact(),
      contact: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without company info", async () => {
    const payload = {
      ...CRM.createTestCompanyContact(),
      company: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
