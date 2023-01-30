import { matchers } from "jest-json-schema";
import { ProductTierPriceResponseListSchema as Schema } from "./response-list";
import { Membership as MembershipTests } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Product Tier Price - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        MembershipTests.createTestProductTierPrice(),
        MembershipTests.createTestProductTierPrice(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
