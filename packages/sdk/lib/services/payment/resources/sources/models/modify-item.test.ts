import { matchers } from "jest-json-schema";
import { SourceModifyItemSchema as Schema } from "./modify-item";
import { Payment as PaymentTests } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Source Update Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...PaymentTests.createTestModifySource(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
