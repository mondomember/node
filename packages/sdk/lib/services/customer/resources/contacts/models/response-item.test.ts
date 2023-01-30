import { matchers } from "jest-json-schema";
import { ContactResponseItemSchema as Schema } from "./response-item";
import { Customer as CustomerTests } from "@mondomember/test";

expect.extend(matchers);

describe("Customer - Contact - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...CustomerTests.createTestContact(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...CustomerTests.createTestContact(),
      id: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without email", async () => {
    const payload = {
      ...CustomerTests.createTestContact(),
      email: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
