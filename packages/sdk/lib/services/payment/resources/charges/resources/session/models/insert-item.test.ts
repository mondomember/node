import { matchers } from "jest-json-schema";
import { ChargeSessionInsertItemSchema as Schema } from "./insert-item";
import { Payment } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Charge Session Create Item Schema", () => {
  test("succeed with payload", async () => {
    const payload = {
      ...Payment.createTestInsertChargeSession(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
