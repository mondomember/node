import { matchers } from "jest-json-schema";
import { ProductTierResponseListSchema as Schema } from "./response-list";
import { Membership as MembershipTests } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Product Tier - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        MembershipTests.createTestProductTier(),
        MembershipTests.createTestProductTier(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
