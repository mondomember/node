import { matchers } from "jest-json-schema";
import { GatewayResponseListSchema as Schema } from "./response-list";
import { Payment as PaymentTests } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Gateway - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        PaymentTests.createTestGateway(),
        PaymentTests.createTestGateway(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
