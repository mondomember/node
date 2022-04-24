import { matchers } from "jest-json-schema";
import { ChargeResponseItemSchema as Schema } from "./response-item";
import { Payment } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Charge - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Payment.createTestCharge(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...Payment.createTestCharge(),
      id: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
