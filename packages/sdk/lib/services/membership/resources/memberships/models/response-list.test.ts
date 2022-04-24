import { matchers } from "jest-json-schema";
import { MembershipResponseListSchema as Schema } from "./response-list";
import { Membership } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Memberships - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        Membership.createTestMembership(),
        Membership.createTestMembership(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
