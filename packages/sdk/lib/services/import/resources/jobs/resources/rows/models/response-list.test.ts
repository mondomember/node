import { matchers } from "jest-json-schema";
import { RowResponseListSchema as Schema } from "./response-list";
import { Import } from "@mondomember/test";

expect.extend(matchers);

describe("Import Row - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [Import.createTestRow(), Import.createTestRow()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
