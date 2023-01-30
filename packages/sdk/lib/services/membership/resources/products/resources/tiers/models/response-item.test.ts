import { matchers } from "jest-json-schema";
import { ProductTierResponseItemSchema as Schema } from "./response-item";
import { Membership as MembershipTests } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Product Tier - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...MembershipTests.createTestProductTier(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
