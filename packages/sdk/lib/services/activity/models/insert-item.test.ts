import { matchers } from "jest-json-schema";
import { Activity as ActivityTests } from "@mondomember/test";
import { ActivityInsertItemSchema as Schema } from "./insert-item";

import { Activity } from "@mondomember/model";

expect.extend(matchers);

describe("Global Activity Create Item Schema", () => {
  test("succeed with note payload", async () => {
    const payload = ActivityTests.createTestInsertActivity();

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with delta payload", async () => {
    const payload = ActivityTests.createTestInsertActivity();

    expect({
      ...payload,
      type: Activity.ActivityType.DELTA,
    }).not.toMatchSchema(Schema);
  });
});
