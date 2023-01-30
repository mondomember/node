import { matchers } from "jest-json-schema";
import { ProductResponseItemSchema as Schema } from "./response-item";
import { Membership as MembershipTests } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Product - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...MembershipTests.createTestProduct(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
