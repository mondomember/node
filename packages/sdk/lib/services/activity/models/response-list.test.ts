import { matchers } from "jest-json-schema";
import { ActivityResponseListSchema as Schema } from "./response-list";
import { Activity as ActivityTests } from "@mondomember/test";

expect.extend(matchers);

describe("Global Activity Response List Schema", () => {
  test("succeed with items", async () => {
    expect({
      items: [
        ActivityTests.createTestNoteActivity(),
        ActivityTests.createTestDeltaActivity(),
        ActivityTests.createTestOperationActivity(),
      ],
    }).toMatchSchema(Schema);
  });
});
