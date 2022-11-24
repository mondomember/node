import { matchers } from "jest-json-schema";
import { UserModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Workspace } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Workspace Workspace User - Update Item Schema", () => {
  test("succeed with a first and last name", async () => {
    const payload = {
      ...Workspace.createTestModifyUser(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...Workspace.createTestModifyUser(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with email", async () => {
    const payload = {
      ...Workspace.createTestModifyUser(),
      email: chance.email(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
