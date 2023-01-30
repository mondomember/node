import { matchers } from "jest-json-schema";
import { MembershipResponseListSchema as Schema } from "./response-list";
import { Membership as MembershipTests } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Memberships - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        MembershipTests.createTestMembership(),
        MembershipTests.createTestMembership(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
