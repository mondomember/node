import { matchers } from "jest-json-schema";
import { NoteActivityInsertItemSchema as Schema } from "./insert-item";
import { Activity } from "@mondomember/test";

expect.extend(matchers);

describe("Activity Note - Create Item Schema", () => {
  test("succeed with payload", async () => {
    const payload = Activity.createTestInsertNoteActivity();

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with empty message", async () => {
    const payload = Activity.createTestInsertNoteActivity({ message: "" });

    expect(payload).not.toMatchSchema(Schema);
  });
});
