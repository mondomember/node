import { matchers } from "jest-json-schema";
import { CompanyResponseListSchema as Schema } from "./response-list";
import { Customer as CustomerTests } from "@mondomember/test";

expect.extend(matchers);

describe("Customer - Company - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        CustomerTests.createTestCompany(),
        CustomerTests.createTestCompany(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
