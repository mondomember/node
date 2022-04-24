import { matchers } from "jest-json-schema";
import { ContactModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { CRM } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("CRM Contact - Update Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...CRM.createTestModifyContact(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...CRM.createTestModifyContact(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null email", async () => {
    const payload = {
      ...CRM.createTestModifyContact(),
      email: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty email", async () => {
    const payload = {
      ...CRM.createTestModifyContact(),
      email: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...CRM.createTestModifyContact(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
