import { matchers } from "jest-json-schema";
import { RowResponseListSchema as Schema } from "./response-list";
import { Import as ImportTests } from "@mondomember/test";

expect.extend(matchers);

describe("Import Row - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [ImportTests.createTestRow(), ImportTests.createTestRow()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
