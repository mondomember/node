import { matchers } from "jest-json-schema";
import { ProductTierInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Membership as MembershipTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Membership Product Tier - Create Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...MembershipTests.createTestInsertProductTier(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with incorrect price", async () => {
    const payload = {
      ...MembershipTests.createTestInsertProductTier(),
      price: {
        version: chance.integer(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...MembershipTests.createTestInsertProductTier(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
