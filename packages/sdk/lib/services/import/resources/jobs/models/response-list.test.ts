import { matchers } from "jest-json-schema";
import { JobResponseListSchema as Schema } from "./response-list";
import { Import } from "@mondomember/test";

expect.extend(matchers);

describe("Import Job - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [Import.createTestJob(), Import.createTestJob()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
