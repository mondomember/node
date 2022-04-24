import { matchers } from "jest-json-schema";
import { ContactResponseItemSchema as Schema } from "./response-item";
import { CRM } from "@mondomember/test";

expect.extend(matchers);

describe("CRM Contact - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...CRM.createTestContact(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...CRM.createTestContact(),
      id: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without email", async () => {
    const payload = {
      ...CRM.createTestContact(),
      email: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
