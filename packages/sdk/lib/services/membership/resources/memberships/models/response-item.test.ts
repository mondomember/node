import { matchers } from "jest-json-schema";
import { MembershipResponseItemSchema as Schema } from "./response-item";
import { Membership } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Memberships - Response Item Schema", () => {
  test("succeed with proper payload", async () => {
    const payload = {
      ...Membership.createTestMembership(),
    };

    expect(payload).toMatchSchema(Schema);
  });
});
