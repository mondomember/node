import { matchers } from "jest-json-schema";
import { ContractInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Membership as MembershipTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Membership Contract - Create Item Schema", () => {
  test("fail with extra data", async () => {
    const payload = {
      ...MembershipTests.createTestInsertContract(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
