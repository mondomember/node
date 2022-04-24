import { matchers } from "jest-json-schema";
import { InvoiceResponseListSchema as Schema } from "./response-list";
import { Billing } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Invoice - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [Billing.createTestInvoice(), Billing.createTestInvoice()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
