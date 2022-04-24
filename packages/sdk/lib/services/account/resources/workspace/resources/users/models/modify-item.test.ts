import { matchers } from "jest-json-schema";
import { WorkspaceUserModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Account } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Account Workspace User - Update Item Schema", () => {
  test("succeed with a first and last name", async () => {
    const payload = {
      ...Account.createTestModifyUser(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...Account.createTestModifyUser(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with email", async () => {
    const payload = {
      ...Account.createTestModifyUser(),
      email: chance.email(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
