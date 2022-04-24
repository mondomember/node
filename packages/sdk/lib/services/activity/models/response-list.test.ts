import { matchers } from "jest-json-schema";
import { ActivityResponseListSchema as Schema } from "./response-list";
import { Activity } from "@mondomember/test";

expect.extend(matchers);

describe("Global Activity Response List Schema", () => {
  test("succeed with items", async () => {
    expect({
      items: [
        Activity.createTestNoteActivity(),
        Activity.createTestDeltaActivity(),
        Activity.createTestOperationActivity(),
      ],
    }).toMatchSchema(Schema);
  });
});
