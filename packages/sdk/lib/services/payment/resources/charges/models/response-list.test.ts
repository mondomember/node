import { matchers } from "jest-json-schema";
import { ChargeResponseListSchema as Schema } from "./response-list";
import { Payment as PaymentTests } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Charge - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [PaymentTests.createTestCharge(), PaymentTests.createTestCharge()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
