import { matchers } from "jest-json-schema";
import { ActivityModifyItemSchema as Schema } from "./modify-item";
import { Activity as ActivityTests } from "@mondomember/test";
import { Activity } from "@mondomember/model";

expect.extend(matchers);

describe("Global Activity Update Item Schema", () => {
  test("succeed with note payload", async () => {
    const payload = ActivityTests.createTestModifyNoteActivity();

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with delta payload props", async () => {
    const payload = ActivityTests.createTestModifyNoteActivity();

    expect({
      ...payload,
      operation: Activity.OperationType.AUTOMATION,
    }).not.toMatchSchema(Schema);
  });
});
