import { matchers } from "jest-json-schema";
import { SourceResponseItemSchema as Schema } from "./response-item";
import { Payment } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Source - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Payment.createTestSource(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...Payment.createTestSource(),
      id: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
