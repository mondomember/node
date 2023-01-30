import { matchers } from "jest-json-schema";
import { RefundResponseItemSchema as Schema } from "./response-item";
import { Payment as PaymentTests } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Refund - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...PaymentTests.createTestRefund(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...PaymentTests.createTestRefund(),
      id: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
