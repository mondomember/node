import { Chance } from "chance";
import {
  createCreatedAtProperty,
  createUpdatedAtProperty,
  createUID,
  IdPropertyInterface,
  IdType,
} from "../../../../../../../models";

import {
  DeliveryResponseItemInterface,
  DeliveryResponseListInterface,
} from "../models";

import { UIDPrefix } from "../../../../../constants";
import { createSubscriptionId } from "../../../utils";

const chance: Chance.Chance = new Chance();

const Delivery = {
  subscription: createSubscriptionId(),
  event: "some.test.event",
  data: {
    [chance.string()]: chance.word(),
  },
  response: {
    statusCode: 200,
    message: "OK",
  },
};

export function createDeliveryId(override?: IdType): IdType {
  return override || createUID(UIDPrefix.SUBSCRIPTION);
}

export function createDeliveryIdProperty(
  override?: IdType
): IdPropertyInterface {
  return {
    id: createDeliveryId(override),
  };
}

export function createDeliveryResponseItem(
  overrides?: Partial<DeliveryResponseItemInterface>
): DeliveryResponseItemInterface {
  return {
    ...createDeliveryIdProperty(),
    ...Delivery,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...overrides,
  };
}

export function createDeliveryResponseList(): DeliveryResponseListInterface {
  return {
    items: [createDeliveryResponseItem(), createDeliveryResponseItem()],
  };
}
