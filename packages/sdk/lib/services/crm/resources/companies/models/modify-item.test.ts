import { matchers } from "jest-json-schema";
import { CompanyModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { CRM } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("CRM Company - Update Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = CRM.createTestModifyCompany();

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...CRM.createTestModifyCompany(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null name", async () => {
    const payload = {
      ...CRM.createTestModifyCompany(),
      ...{
        name: null,
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty name", async () => {
    const payload = CRM.createTestModifyCompany({
      name: "",
    });

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...CRM.createTestModifyCompany(),
      ...{
        foo: chance.word(),
      },
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
