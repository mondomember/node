import { Chance } from "chance";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createUpdatedAtProperty,
} from "../../utils";
import { Webhook } from "@mondomember/model";

const chance: Chance.Chance = new Chance();

function createSubscription() {
  return {
    label: chance.word(),
    url: chance.url(),
    events: ["some.test.event", "some.test.alt"],
  };
}

export function createTestInsertSubscription(
  overrides?: Partial<Webhook.SubscriptionInsertItem>
): Webhook.SubscriptionInsertItem {
  return {
    ...createSubscription(),
    ...overrides,
  };
}

export function createTestModifySubscription(
  overrides?: Partial<Webhook.SubscriptionModifyItem>
): Webhook.SubscriptionModifyItem {
  return {
    ...createSubscription(),
    ...overrides,
  };
}

export function createTestSubscription(
  overrides?: Partial<Webhook.SubscriptionResponseItem>
): Webhook.SubscriptionResponseItem {
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
  overrides?: Partial<Webhook.SubscriptionInsertItem>
): Webhook.SubscriptionInsertItem {
  return createTestInsertSubscription(overrides);
}

/**
 * @deprecated
 */
export function createTestSubscriptionModifyItem(
  overrides?: Partial<Webhook.SubscriptionModifyItem>
): Webhook.SubscriptionModifyItem {
  return createTestModifySubscription(overrides);
}

/**
 * @deprecated
 */
export function createTestSubscriptionResponseItem(
  overrides?: Partial<Webhook.SubscriptionResponseItem>
): Webhook.SubscriptionResponseItem {
  return createTestSubscription(overrides);
}
