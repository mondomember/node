import { matchers } from "jest-json-schema";
import { ProductTierResponseListSchema as Schema } from "./response-list";
import { Membership } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Product Tier - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        Membership.createTestProductTier(),
        Membership.createTestProductTier(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
