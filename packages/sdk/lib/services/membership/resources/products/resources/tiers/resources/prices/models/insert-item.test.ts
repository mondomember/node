import { matchers } from "jest-json-schema";
import { ProductTierPriceInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Membership as MembershipTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Membership Product Tier Price - Create Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...MembershipTests.createTestInsertProductTierPrice(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...MembershipTests.createTestInsertProductTierPrice(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
