import { matchers } from "jest-json-schema";
import { SourceSessionInsertItemSchema as Schema } from "./insert-item";
import { Payment as PaymentTests } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Source Session Create Item Schema", () => {
  test("succeed with payload", async () => {
    const payload = {
      ...PaymentTests.createTestInsertSourceSession(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
