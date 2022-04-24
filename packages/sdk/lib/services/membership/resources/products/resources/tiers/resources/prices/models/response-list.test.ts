import { matchers } from "jest-json-schema";
import { ProductTierPriceResponseListSchema as Schema } from "./response-list";
import { Membership } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Product Tier Price - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        Membership.createTestProductTierPrice(),
        Membership.createTestProductTierPrice(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
