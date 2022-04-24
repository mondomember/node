import { matchers } from "jest-json-schema";
import { CompanyResponseListSchema as Schema } from "./response-list";
import { CRM } from "@mondomember/test";

expect.extend(matchers);

describe("CRM Company - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [CRM.createTestCompany(), CRM.createTestCompany()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
