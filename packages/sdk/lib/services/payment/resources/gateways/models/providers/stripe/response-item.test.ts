import { matchers } from "jest-json-schema";
import { StripeGatewayResponseItemSchema as Schema } from "./response-item";
import { Payment as PaymentTests } from "@mondomember/test";
import { Payment } from "@mondomember/model";

expect.extend(matchers);

describe("Payment Gateway - Stripe Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...PaymentTests.createTestGateway(),
      provider: Payment.Provider.STRIPE,
    };

    expect(payload).toMatchSchema(Schema);
  });
});
