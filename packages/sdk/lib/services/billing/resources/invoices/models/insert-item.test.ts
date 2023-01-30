import { matchers } from "jest-json-schema";
import { InvoiceInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Billing as BillingTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Billing - Invoice - Create Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...BillingTests.createTestInsertInvoice(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...BillingTests.createTestInsertInvoice(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
