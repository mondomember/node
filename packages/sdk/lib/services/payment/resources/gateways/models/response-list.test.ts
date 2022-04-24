import { matchers } from "jest-json-schema";
import { GatewayResponseListSchema as Schema } from "./response-list";
import { Payment } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Gateway - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [Payment.createTestGateway(), Payment.createTestGateway()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
