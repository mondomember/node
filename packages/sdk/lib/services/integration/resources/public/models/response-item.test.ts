import { matchers } from "jest-json-schema";
import { PublicTokenResponseItemSchema as Schema } from "./response-item";
import { Integration } from "@mondomember/test";

expect.extend(matchers);

describe("Integration Public Token - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Integration.createTestPublicToken(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
