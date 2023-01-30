import { matchers } from "jest-json-schema";
import { DeltaActivityResponseItemSchema as Schema } from "./response-item";
import { Activity as ActivityTests } from "@mondomember/test";

expect.extend(matchers);

describe("Activity Delta -  Response Item Schema", () => {
  test("succeed with payload", async () => {
    const payload = ActivityTests.createTestDeltaActivity();

    expect(payload).toMatchSchema(Schema);
  });
});
