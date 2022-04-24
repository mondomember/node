import { matchers } from "jest-json-schema";
import { ActivityModifyItemSchema as Schema } from "./modify-item";
import { Activity } from "@mondomember/test";
import { OperationType } from "./constants";

expect.extend(matchers);

describe("Global Activity Update Item Schema", () => {
  test("succeed with note payload", async () => {
    const payload = Activity.createTestModifyNoteActivity();

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with delta payload props", async () => {
    const payload = Activity.createTestModifyNoteActivity();

    expect({
      ...payload,
      operation: OperationType.AUTOMATION,
    }).not.toMatchSchema(Schema);
  });
});
