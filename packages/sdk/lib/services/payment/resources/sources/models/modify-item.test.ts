import { matchers } from "jest-json-schema";
import { SourceModifyItemSchema as Schema } from "./modify-item";
import { Payment } from "@mondomember/test";

expect.extend(matchers);

describe("Payment Source Update Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...Payment.createTestModifySource(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
