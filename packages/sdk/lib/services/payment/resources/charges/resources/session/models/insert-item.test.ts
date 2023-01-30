import { matchers } from "jest-json-schema";
import { ChargeSessionInsertItemSchema as Schema } from "./insert-item";
import { Payment as PaymentTests } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Charge Session Create Item Schema", () => {
  test("succeed with payload", async () => {
    const payload = {
      ...PaymentTests.createTestInsertChargeSession(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
