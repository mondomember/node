import { matchers } from "jest-json-schema";
import { ChargeModifyItemSchema as Schema } from "./modify-item";
import { Payment as PaymentTests } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Charge - Update Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...PaymentTests.createTestModifyCharge(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
