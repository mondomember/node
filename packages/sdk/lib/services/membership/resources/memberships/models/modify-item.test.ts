import { matchers } from "jest-json-schema";
import { MembershipModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Membership as MembershipTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Membership Memberships - Update Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...MembershipTests.createTestModifyMembership(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...MembershipTests.createTestModifyMembership(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
