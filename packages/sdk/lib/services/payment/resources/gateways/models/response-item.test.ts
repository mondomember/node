import { matchers } from "jest-json-schema";
import { GatewayResponseItemSchema as Schema } from "./response-item";
import { Payment } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Gateway - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Payment.createTestGateway(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...Payment.createTestGateway(),
      id: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
