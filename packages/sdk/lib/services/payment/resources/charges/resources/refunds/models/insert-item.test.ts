import { matchers } from "jest-json-schema";
import { RefundInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Payment } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Payment Refund - Create Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...Payment.createTestInsertRefund(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("succeed with Id only", async () => {
    const payload = {
      id: Payment.createTestInsertRefund().id,
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with improper Id format", async () => {
    const payload = {
      ...Payment.createTestInsertRefund(),
      id: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
