import { matchers } from "jest-json-schema";
import { ProductResponseListSchema as Schema } from "./response-list";
import { Membership } from "@mondomember/test";

expect.extend(matchers);

describe("Membership Product - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [Membership.createTestProduct(), Membership.createTestProduct()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
