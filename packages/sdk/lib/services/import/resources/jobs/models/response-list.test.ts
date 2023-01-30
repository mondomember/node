import { matchers } from "jest-json-schema";
import { JobResponseListSchema as Schema } from "./response-list";
import { Import as ImportTests } from "@mondomember/test";

expect.extend(matchers);

describe("Import Job - Response List Schema", () => {
  test("succeed with items", async () => {
    const payload = {
      items: [ImportTests.createTestJob(), ImportTests.createTestJob()],
    };

    expect(payload).toMatchSchema(Schema);
  });
});
