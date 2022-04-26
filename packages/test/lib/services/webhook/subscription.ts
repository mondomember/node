import { Chance } from "chance";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createUpdatedAtProperty,
} from "../../utils";
import { Webhook } from "@mondomember/sdk";

const chance: Chance.Chance = new Chance();

function createSubscription() {
  return {
    label: chance.word(),
    url: chance.url(),
    events: ["some.test.event", "some.test.alt"],
  };
}

export function createTestInsertSubscription(
  overrides?: Partial<Webhook.SubscriptionInsertItemInterface>
): Webhook.SubscriptionInsertItemInterface {
  return {
    ...createSubscription(),
    ...overrides,
  };
}

export function createTestModifySubscription(
  overrides?: Partial<Webhook.SubscriptionModifyItemInterface>
): Webhook.SubscriptionModifyItemInterface {
  return {
    ...createSubscription(),
    ...overrides,
  };
}

export function createTestSubscription(
  overrides?: Partial<Webhook.SubscriptionResponseItemInterface>
): Webhook.SubscriptionResponseItemInterface {
  return {
    id: generateTestKSUID(Webhook.UIDPrefix.SUBSCRIPTION),
    ...createSubscription(),
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...overrides,
  };
}

/**
 * @deprecated
 */
export function createTestSubscriptionInsertItem(
  overrides?: Partial<Webhook.SubscriptionInsertItemInterface>
): Webhook.SubscriptionInsertItemInterface {
  return createTestInsertSubscription(overrides);
}

/**
 * @deprecated
 */
export function createTestSubscriptionModifyItem(
  overrides?: Partial<Webhook.SubscriptionModifyItemInterface>
): Webhook.SubscriptionModifyItemInterface {
  return createTestModifySubscription(overrides);
}

/**
 * @deprecated
 */
export function createTestSubscriptionResponseItem(
  overrides?: Partial<Webhook.SubscriptionResponseItemInterface>
): Webhook.SubscriptionResponseItemInterface {
  return createTestSubscription(overrides);
}
