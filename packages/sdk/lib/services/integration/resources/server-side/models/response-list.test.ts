import { matchers } from "jest-json-schema";
import { ServerSideTokenResponseListSchema as Schema } from "./response-list";
import { Integration } from "@mondomember/test";

expect.extend(matchers);

describe("Integration Server Side Token - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [
        Integration.createTestServerSideToken(),
        Integration.createTestServerSideToken(),
      ],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
