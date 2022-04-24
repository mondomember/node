import { matchers } from "jest-json-schema";
import { ServerSideTokenResponseItemSchema as Schema } from "./response-item";
import { Integration } from "@mondomember/test";

expect.extend(matchers);

describe("Integration Server Side Token - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Integration.createTestServerSideToken(),
    };

    expect(payload).toMatchSchema(Schema);
  });

  test("fail without id", async () => {
    const payload = {
      ...Integration.createTestServerSideToken(),
      id: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail without label", async () => {
    const payload = {
      ...Integration.createTestServerSideToken(),
      label: undefined,
    };

    expect(payload).not.toMatchSchema(Schema);
  });
});
