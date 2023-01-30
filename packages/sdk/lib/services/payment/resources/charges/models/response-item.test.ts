import { matchers } from "jest-json-schema";
import { ChargeResponseItemSchema as Schema } from "./response-item";
import { Payment as PaymentTests } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Charge - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...PaymentTests.createTestCharge(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...PaymentTests.createTestCharge(),
      id: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
