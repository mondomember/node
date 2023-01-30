import { Chance } from "chance";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createUpdatedAtProperty,
} from "../../utils";
import { Webhook } from "@mondomember/model";

const chance: Chance.Chance = new Chance();

const Delivery = {
  subscription: generateTestKSUID(Webhook.UIDPrefix.SUBSCRIPTION),
  event: "some.test.event",
  data: {
    [chance.string()]: chance.word(),
  },
  response: {
    statusCode: 200,
    message: "OK",
  },
};

export function createTestDelivery(
  overrides?: Partial<Webhook.DeliveryResponseItem>
): Webhook.DeliveryResponseItem {
  return {
    id: generateTestKSUID(Webhook.UIDPrefix.DELIVERY),
    ...Delivery,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...overrides,
  };
}

/**
 * @deprecated
 */
export function createTestDeliveryResponseItem(
  overrides?: Partial<Webhook.DeliveryResponseItem>
): Webhook.DeliveryResponseItem {
  return createTestDelivery(overrides);
}
