import { matchers } from "jest-json-schema";
import { InvoiceInsertItemSchema as Schema } from "./insert-item";
import { Chance } from "chance";
import { Billing } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Membership Invoice - Create Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...Billing.createTestInsertInvoice(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Billing.createTestInsertInvoice(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
