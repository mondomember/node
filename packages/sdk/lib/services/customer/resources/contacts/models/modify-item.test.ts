import { matchers } from "jest-json-schema";
import { ContactModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Customer as CustomerTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Customer - Contact - Update Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...CustomerTests.createTestModifyContact(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...CustomerTests.createTestModifyContact(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null email", async () => {
    const payload = {
      ...CustomerTests.createTestModifyContact(),
      email: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty email", async () => {
    const payload = {
      ...CustomerTests.createTestModifyContact(),
      email: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...CustomerTests.createTestModifyContact(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
