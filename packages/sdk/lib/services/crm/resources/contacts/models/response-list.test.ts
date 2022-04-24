import { matchers } from "jest-json-schema";
import { ContactResponseListSchema as Schema } from "./response-list";
import { CRM } from "@mondomember/test";

expect.extend(matchers);

describe("CRM Contact Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [CRM.createTestContact(), CRM.createTestContact()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
