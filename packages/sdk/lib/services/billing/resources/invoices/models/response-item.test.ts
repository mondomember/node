import { matchers } from "jest-json-schema";
import { InvoiceResponseItemSchema as Schema } from "./response-item";
import { Billing as BillingTests } from "@mondomember/test";

expect.extend(matchers);

describe("Billing - Invoice - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...BillingTests.createTestInvoice(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
