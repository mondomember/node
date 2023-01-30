import { matchers } from "jest-json-schema";
import { OperationActivityResponseItemSchema as Schema } from "./response-item";
import { Activity as ActivityTests } from "@mondomember/test";

expect.extend(matchers);

describe("Activity Operation -  Response Item Schema", () => {
  test("succeed with payload", async () => {
    const payload = ActivityTests.createTestOperationActivity();

    expect(payload).toMatchSchema(Schema);
  });
});
