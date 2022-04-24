import { matchers } from "jest-json-schema";
import { ProductTierModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Membership } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Membership Product Tier - Update Item Schema", () => {
  test("succeed with payload", async () => {
    const payload = {
      ...Membership.createTestModifyProductTier(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with incorrect price", async () => {
    const payload = {
      ...Membership.createTestModifyProductTier(),
      price: {
        amount: chance.natural({ min: 1, max: 9999 }),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Membership.createTestModifyProductTier(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
