import { matchers } from "jest-json-schema";
import { CompanyContactResponseListSchema as Schema } from "./response-list";
import { Customer as CustomerTests } from "@mondomember/test";

expect.extend(matchers);

describe("Customer - Company Contact - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        CustomerTests.createTestCompanyContact(),
        CustomerTests.createTestCompanyContact(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
