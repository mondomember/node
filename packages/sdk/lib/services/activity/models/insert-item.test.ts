import { matchers } from "jest-json-schema";
import { Activity } from "@mondomember/test";
import { ActivityInsertItemSchema as Schema } from "./insert-item";

import { ActivityType } from "./constants";

expect.extend(matchers);

describe("Global Activity Create Item Schema", () => {
  test("succeed with note payload", async () => {
    const payload = Activity.createTestInsertActivity();

    expect(payload).toMatchSchema(Schema);
  });

  test("fail with delta payload", async () => {
    const payload = Activity.createTestInsertActivity();

    expect({
      ...payload,
      type: ActivityType.DELTA,
    }).not.toMatchSchema(Schema);
  });
});
