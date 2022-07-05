import { matchers } from "jest-json-schema";
import { RefundResponseListSchema as Schema } from "./response-list";
import { Payment } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Refund - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [Payment.createTestRefund(), Payment.createTestRefund()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
