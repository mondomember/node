import { matchers } from "jest-json-schema";
import { ContactInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Customer as CustomerTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Customer - Contact - Create Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...CustomerTests.createTestInsertContact(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with improper Id format", async () => {
    const payload = {
      ...CustomerTests.createTestInsertContact(),
      id: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with improper email", async () => {
    const payload = {
      ...CustomerTests.createTestInsertContact(),
      email: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null email", async () => {
    const payload = {
      ...CustomerTests.createTestInsertContact(),
      email: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty email", async () => {
    const payload = {
      ...CustomerTests.createTestInsertContact(),
      email: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...CustomerTests.createTestInsertContact(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
