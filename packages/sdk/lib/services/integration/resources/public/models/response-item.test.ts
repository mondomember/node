import { matchers } from "jest-json-schema";
import { PublicTokenResponseItemSchema as Schema } from "./response-item";
import { Integration as IntegrationTests } from "@mondomember/test";

expect.extend(matchers);

describe("Integration Public Token - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...IntegrationTests.createTestPublicToken(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
