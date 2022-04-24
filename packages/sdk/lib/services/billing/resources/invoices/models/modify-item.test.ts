import { matchers } from "jest-json-schema";
import { InvoiceModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Billing } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Membership Invoice - Update Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...Billing.createTestModifyInvoice(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Billing.createTestModifyInvoice(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
