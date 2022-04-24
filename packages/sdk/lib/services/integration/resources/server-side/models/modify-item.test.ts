import { matchers } from "jest-json-schema";
import { ServerSideTokenModifyItemSchema as Schema } from "./modify-item";
import { Chance } from "chance";
import { Integration } from "@mondomember/test";

expect.extend(matchers);

const chance: Chance.Chance = new Chance();

describe("Integration Server Side Token - Update Item Schema", () => {
  test("succeed with full payload", async () => {
    const payload = {
      ...Integration.createTestModifyServerSideToken(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with Id", async () => {
    const payload = {
      ...Integration.createTestModifyServerSideToken(),
      id: chance.guid(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail null label", async () => {
    const payload = {
      ...Integration.createTestModifyServerSideToken(),
      label: null,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty label", async () => {
    const payload = {
      ...Integration.createTestModifyServerSideToken(),
      label: "",
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with extra data", async () => {
    const payload = {
      ...Integration.createTestModifyServerSideToken(),
      foo: chance.word(),
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
