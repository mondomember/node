import { matchers } from "jest-json-schema";
import { InvoiceTransactionResponseListSchema as Schema } from "./response-list";
import { Billing } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Invoice Transaction - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        Billing.createTestInvoiceTransaction(),
        Billing.createTestInvoiceTransaction(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
