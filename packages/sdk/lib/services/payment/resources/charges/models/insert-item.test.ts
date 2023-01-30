import { matchers } from "jest-json-schema";
import { ChargeInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Payment as PaymentTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Payment Charge - Create Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...PaymentTests.createTestInsertCharge(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with improper Id format", async () => {
    const payload = {
      ...PaymentTests.createTestInsertCharge(),
      id: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without source or customer", async () => {
    const payload = {
      ...PaymentTests.createTestInsertCharge(),
      source: undefined,
      customer: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty source", async () => {
    const payload = {
      ...PaymentTests.createTestInsertCharge(),
      source: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with null source", async () => {
    const payload = {
      ...PaymentTests.createTestInsertCharge(),
      source: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty customer", async () => {
    const payload = {
      ...PaymentTests.createTestInsertCharge(),
      customer: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with null customer", async () => {
    const payload = {
      ...PaymentTests.createTestInsertCharge(),
      customer: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
