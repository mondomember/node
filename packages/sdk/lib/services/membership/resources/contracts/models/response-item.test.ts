import { matchers } from "jest-json-schema";
import { ContractResponseItemSchema as Schema } from "./response-item";
import { Membership as MembershipTests } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Contract - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...MembershipTests.createTestContract(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
