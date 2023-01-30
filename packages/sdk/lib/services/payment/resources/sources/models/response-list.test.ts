import { matchers } from "jest-json-schema";
import { SourceResponseListSchema as Schema } from "./response-list";
import { Payment as PaymentTests } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Source - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [PaymentTests.createTestSource(), PaymentTests.createTestSource()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
