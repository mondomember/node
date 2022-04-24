import { matchers } from "jest-json-schema";
import { InvoiceResponseItemSchema as Schema } from "./response-item";
import { Billing } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Invoice - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Billing.createTestInvoice(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
