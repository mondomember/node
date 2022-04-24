import { matchers } from "jest-json-schema";
import { NoteActivityResponseItemSchema as Schema } from "./response-item";
import { Activity } from "@mondomember/test";

expect.extend(matchers);

describe("Activity Note - Response Item Schema", () => {
  test("succeed with payload", async () => {
    const payload = Activity.createTestNoteActivity();

    expect(payload).toMatchSchema(Schema);
  });
});
