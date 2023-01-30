import { matchers } from "jest-json-schema";
import { InvoiceTransactionResponseListSchema as Schema } from "./response-list";
import { Billing as BillingTests } from "@mondomember/test";

expect.extend(matchers);

describe("Billing - Invoice Transaction - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        BillingTests.createTestInvoiceTransaction(),
        BillingTests.createTestInvoiceTransaction(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
