import { matchers } from "jest-json-schema";
import { SourceSessionInsertItemSchema as Schema } from "./insert-item";
import { Payment } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Source Session Create Item Schema", () => {
  test("succeed with payload", async () => {
    const payload = {
      ...Payment.createTestInsertSourceSession(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
