import { matchers } from "jest-json-schema";
import { IdentityResponseItemSchema as Schema } from "./response-item";
import { Identity as IdentityTests } from "@mondomember/test";

expect.extend(matchers);

describe("Identity - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...IdentityTests.createTestIdentity(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
