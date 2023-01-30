import { matchers } from "jest-json-schema";
import { RefundInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Payment as PaymentTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Payment Refund - Create Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...PaymentTests.createTestInsertRefund(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("succeed with Id and charge", async () => {
    const refund = PaymentTests.createTestInsertRefund();

    const payload = {
      id: refund.id,
      charge: refund.charge,
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with improper Id format", async () => {
    const refund = PaymentTests.createTestInsertRefund();

    const payload = {
      ...PaymentTests.createTestInsertRefund(),
      charge: refund.charge,
      id: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
