import { matchers } from "jest-json-schema";
import { SourceInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Payment } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Payment Source Create Item Schema", () => {
  test("succeed with payload", async () => {
    const payload = {
      ...Payment.createTestInsertSource(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with improper Id format", async () => {
    const payload = {
      ...Payment.createTestInsertSource(),
      id: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
