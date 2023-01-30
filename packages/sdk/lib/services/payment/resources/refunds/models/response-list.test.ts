import { matchers } from "jest-json-schema";
import { RefundResponseListSchema as Schema } from "./response-list";
import { Payment as PaymentTests } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Refund - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [PaymentTests.createTestRefund(), PaymentTests.createTestRefund()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
