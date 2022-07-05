import { matchers } from "jest-json-schema";
import { RefundModifyItemSchema as Schema } from "./modify-item";
import { Payment } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Refund - Update Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...Payment.createTestModifyRefund(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
