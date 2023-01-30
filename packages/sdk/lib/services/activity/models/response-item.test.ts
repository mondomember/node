import { matchers } from "jest-json-schema";
import { ActivityResponseItemSchema as Schema } from "./response-item";

import { Activity as ActivityTests } from "@mondomember/test";

expect.extend(matchers);

describe("Global Activity Response Item Schema", () => {
  test("succeed with note payload", async () => {
    const payload = ActivityTests.createTestNoteActivity();

    expect(payload).toMatchSchema(Schema);
  });

  test("succeed with delta payload", async () => {
    const payload = ActivityTests.createTestDeltaActivity();

    expect(payload).toMatchSchema(Schema);
  });

  test("succeed with operation payload", async () => {
    const payload = ActivityTests.createTestOperationActivity();

    expect(payload).toMatchSchema(Schema);
  });
});
