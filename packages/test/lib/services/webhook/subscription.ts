import { Chance } from "chance";
import {
  createCreatedAtProperty,
  createUpdatedAtProperty,
  createUID,
  IdPropertyInterface,
  IdType,
} from "@mondo-rest-api/util-models";

import {
  SubscriptionInsertItemInterface,
  SubscriptionModifyItemInterface,
  SubscriptionResponseItemInterface,
  SubscriptionResponseListInterface,
} from "../models";

import { UIDPrefix } from "../../../constants";

const chance: Chance.Chance = new Chance();

const Subscription = {
  label: chance.word(),
  url: chance.url(),
  events: ["some.test.event", "some.test.alt"],
};

export function createSubscriptionId(override?: IdType): IdType {
  return override || createUID(UIDPrefix.SUBSCRIPTION);
}

export function createSubscriptionIdProperty(
  override?: IdType
): IdPropertyInterface {
  return {
    id: createSubscriptionId(override),
  };
}

export function createSubscriptionInsertItem(
  overrides?: Partial<SubscriptionInsertItemInterface>
): SubscriptionInsertItemInterface {
  return {
    ...Subscription,
    ...overrides,
  };
}

export function createSubscriptionModifyItem(
  overrides?: Partial<SubscriptionModifyItemInterface>
): SubscriptionModifyItemInterface {
  return {
    ...Subscription,
    ...overrides,
  };
}

export function createSubscriptionResponseItem(
  overrides?: Partial<SubscriptionResponseItemInterface>
): SubscriptionResponseItemInterface {
  return {
    ...createSubscriptionIdProperty(),
    ...Subscription,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...overrides,
  };
}

export function createSubscriptionResponseList(): SubscriptionResponseListInterface {
  return {
    items: [createSubscriptionResponseItem(), createSubscriptionResponseItem()],
  };
}
