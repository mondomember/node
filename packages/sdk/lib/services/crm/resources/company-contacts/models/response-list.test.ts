import { matchers } from "jest-json-schema";
import { CompanyContactResponseListSchema as Schema } from "./response-list";
import { CRM } from "@mondomember/test";

expect.extend(matchers);

describe("CRM Company Contact - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [CRM.createTestCompanyContact(), CRM.createTestCompanyContact()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
