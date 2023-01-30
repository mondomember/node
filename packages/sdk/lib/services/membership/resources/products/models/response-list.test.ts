import { matchers } from "jest-json-schema";
import { ProductResponseListSchema as Schema } from "./response-list";
import { Membership as MembershipTests } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Product - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        MembershipTests.createTestProduct(),
        MembershipTests.createTestProduct(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
