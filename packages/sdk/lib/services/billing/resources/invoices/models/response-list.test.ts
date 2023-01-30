import { matchers } from "jest-json-schema";
import { InvoiceResponseListSchema as Schema } from "./response-list";
import { Billing as BillingTests } from "@mondomember/test";

expect.extend(matchers);

describe("Billing - Invoice - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        BillingTests.createTestInvoice(),
        BillingTests.createTestInvoice(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
