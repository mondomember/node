import { matchers } from "jest-json-schema";
import { ContractModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Membership } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Membership Contract - Update Item Schema", () => {
  test("succeed with full payload", async () => {
    expect(Membership.createTestModifyContract()).toMatchSchema(Schema);
  });

  test("suceed with empty contacts", async () => {
    const payload = {
      ...Membership.createTestModifyContract(),
      ...{
        contacts: [],
      },
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with invalid period start", async () => {
    const payload = {
      ...Membership.createTestModifyContract(),
      ...{
        period: {
          endAt: new Date().toISOString(),
        },
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with invalid period date", async () => {
    const payload = {
      ...Membership.createTestModifyContract(),
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
