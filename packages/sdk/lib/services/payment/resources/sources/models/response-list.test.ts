import { matchers } from "jest-json-schema";
import { SourceResponseListSchema as Schema } from "./response-list";
import { Payment } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Source - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [Payment.createTestSource(), Payment.createTestSource()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
