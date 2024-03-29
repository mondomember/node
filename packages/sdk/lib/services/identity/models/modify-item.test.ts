import { matchers } from "jest-json-schema";
import { IdentityModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Identity as IdentityTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Identity - Update Item Schema", () => {
  test("succeed with a first and last name", async () => {
    const payload = {
      ...IdentityTests.createTestModifyIdentity(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...IdentityTests.createTestModifyIdentity(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
