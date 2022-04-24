import { Chance } from "chance";
import {
  generateTestKSUID,
  createCreatedAtProperty,
  createUpdatedAtProperty,
  createLastUpdatedProperty,
} from "../../utils";

import { Account } from "@mondomember/sdk";

const chance: Chance.Chance = new Chance();

const MessageProperty = {
  message: chance.paragraph(),
};

const TitleProperty = {
  title: chance.sentence(),
};

const TypeProperty = {
  type: chance.pickone(Account.NotificationTypeEnum),
};

export function createTestUserNotification(
  overide?: Partial<Account.NotificationResponseItemInterface>
): Account.NotificationResponseItemInterface {
  return {
    id: generateTestKSUID(Account.UIDPrefix.NOTIFICATION),
    ...TypeProperty,
    ...TitleProperty,
    ...MessageProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createLastUpdatedProperty(),
    ...overide,
  };
}

export function createTestInsertUserNotification(
  overide?: Partial<Account.NotificationInsertItemInterface>
): Account.NotificationInsertItemInterface {
  return {
    id: generateTestKSUID(Account.UIDPrefix.NOTIFICATION),
    ...TypeProperty,
    ...TitleProperty,
    ...MessageProperty,
    ...overide,
  };
}

export function createTestModifyUserNotification(
  overide?: Partial<Account.NotificationModifyItemInterface>
): Account.NotificationModifyItemInterface {
  return {
    ...TypeProperty,
    ...TitleProperty,
    ...MessageProperty,
    ...overide,
  };
}
