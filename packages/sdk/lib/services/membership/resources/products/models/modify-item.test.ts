import { matchers } from "jest-json-schema";
import { ProductModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Membership } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Membership Product - Update Item Schema", () => {
  test("succeed with payload", async () => {
    const payload = {
      ...Membership.createTestModifyProduct(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Membership.createTestModifyProduct(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
