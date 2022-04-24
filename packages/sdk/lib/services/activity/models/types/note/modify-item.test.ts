import { matchers } from "jest-json-schema";
import { NoteActivityModifyItemSchema as Schema } from "./modify-item";
import { Activity } from "@mondomember/test";

expect.extend(matchers);

describe("Activity Note - Update Item Schema", () => {
  test("succeed with message", async () => {
    const payload = Activity.createTestModifyNoteActivity();

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with null message", async () => {
    const payload = Activity.createTestModifyNoteActivity({
      message: null as unknown as string,
    });

    expect(payload).not.toMatchSchema(Schema);
  });

  test("fail with empty message", async () => {
    const payload = Activity.createTestModifyNoteActivity({ message: "" });

    expect(payload).not.toMatchSchema(Schema);
  });
});
