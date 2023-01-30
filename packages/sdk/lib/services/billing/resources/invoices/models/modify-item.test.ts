import { matchers } from "jest-json-schema";
import { InvoiceModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Billing as BillingTests } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Billing - Invoice - Update Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...BillingTests.createTestModifyInvoice(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...BillingTests.createTestModifyInvoice(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
