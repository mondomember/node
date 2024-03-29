import { matchers } from "jest-json-schema";
import { ContractModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Membership as MembershipTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Membership Contract - Update Item Schema", () => {
  test("succeed with full payload", async () => {
    expect(MembershipTests.createTestModifyContract()).toMatchSchema(Schema);
  });

  test("suceed with empty contacts", async () => {
    const payload = {
      ...MembershipTests.createTestModifyContract(),
      ...{
        contacts: [],
      },
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with invalid period", async () => {
    const payload = {
      ...MembershipTests.createTestModifyContract(),
      ...{
        period: {
          endAt: "foo",
        },
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with invalid period date", async () => {
    const payload = {
      ...MembershipTests.createTestModifyContract(),
      ...{
        period: {
          startAt: chance.word(),
          endAt: new Date().toISOString(),
        },
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
