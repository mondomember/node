import { matchers } from "jest-json-schema";
import { ContactResponseListSchema as Schema } from "./response-list";
import { Customer as CustomerTests } from "@mondomember/test";

expect.extend(matchers);

describe("Customer - Contact - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        CustomerTests.createTestContact(),
        CustomerTests.createTestContact(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
