import { matchers } from "jest-json-schema";
import { UserModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Workspace as WorkspaceTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Workspace Workspace User - Update Item Schema", () => {
  test("succeed with a first and last name", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyUser(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyUser(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with email", async () => {
    const payload = {
      ...WorkspaceTests.createTestModifyUser(),
      email: chance.email(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
