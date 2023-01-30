import { matchers } from "jest-json-schema";
import { MembershipInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Membership as MembershipTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Membership Memberships - Create Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...MembershipTests.createTestInsertMembership(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...MembershipTests.createTestInsertMembership(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
