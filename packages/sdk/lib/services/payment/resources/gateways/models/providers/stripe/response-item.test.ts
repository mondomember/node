import { matchers } from "jest-json-schema";
import { StripeGatewayResponseItemSchema as Schema } from "./response-item";
import { Payment } from "@mondomember/test";
import { Provider } from "../../../../../models";

expect.extend(matchers);

describe("Payment Gateway - Stripe Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Payment.createTestGateway(),
      provider: Provider.STRIPE,
    };

    expect(payload).toMatchSchema(Schema);
  });
});
