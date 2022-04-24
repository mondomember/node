import { matchers } from "jest-json-schema";
import { IdentityResponseItemSchema as Schema } from "./response-item";
import { Account } from "@mondomember/test";

expect.extend(matchers);

describe("Account Identity - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Account.createTestIdentity(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
