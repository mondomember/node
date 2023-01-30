import { matchers } from "jest-json-schema";
import { CompanyResponseItemSchema as Schema } from "./response-item";
import { Customer as CustomerTests } from "@mondomember/test";

expect.extend(matchers);

describe("Customer - Company - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = CustomerTests.createTestCompany();

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...CustomerTests.createTestCompany(),
      ...{
        id: undefined,
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without name", async () => {
    const payload = {
      ...CustomerTests.createTestCompany(),
      ...{
        name: undefined,
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
