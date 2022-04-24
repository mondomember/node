import { matchers } from "jest-json-schema";
import { ProductTierPriceResponseItemSchema as Schema } from "./response-item";
import { Membership } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Product Tier Price - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Membership.createTestProductTierPrice(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
