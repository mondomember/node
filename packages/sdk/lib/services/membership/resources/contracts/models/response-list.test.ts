import { matchers } from "jest-json-schema";
import { ContractResponseListSchema as Schema } from "./response-list";
import { Membership as MembershipTests } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Contract - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        MembershipTests.createTestContract(),
        MembershipTests.createTestContract(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
