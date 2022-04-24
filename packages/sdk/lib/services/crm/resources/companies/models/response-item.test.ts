import { matchers } from "jest-json-schema";
import { CompanyResponseItemSchema as Schema } from "./response-item";
import { CRM } from "@mondomember/test";

expect.extend(matchers);

describe("CRM Company - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = CRM.createTestCompany();

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...CRM.createTestCompany(),
      ...{
        id: undefined,
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without name", async () => {
    const payload = {
      ...CRM.createTestCompany(),
      ...{
        name: undefined,
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
