import { Chance } from "chance";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createUpdatedAtProperty,
} from "../../utils";
import { Webhook } from "@mondomember/sdk";

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

export function createTestDeliveryResponseItem(
  overrides?: Partial<Webhook.DeliveryResponseItemInterface>
): Webhook.DeliveryResponseItemInterface {
  return {
    id: generateTestKSUID(Webhook.UIDPrefix.DELIVERY),
    ...Delivery,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...overrides,
  };
}
