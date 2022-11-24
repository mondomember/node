import { Chance } from "chance";
import {
  generateTestKSUID,
  createCreatedAtProperty,
  createUpdatedAtProperty,
  createLastUpdatedProperty,
} from "../../utils";

import { Workspace } from "@mondomember/sdk";

const chance: Chance.Chance = new Chance();

const MessageProperty = {
  message: chance.paragraph(),
};

const TitleProperty = {
  title: chance.sentence(),
};

const TypeProperty = {
  type: chance.pickone(Workspace.NotificationTypeEnum),
};

export function createTestNotification(
  overide?: Partial<Workspace.NotificationResponseItemInterface>
): Workspace.NotificationResponseItemInterface {
  return {
    id: generateTestKSUID(Workspace.UIDPrefix.NOTIFICATION),
    ...TypeProperty,
    ...TitleProperty,
    ...MessageProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createLastUpdatedProperty(),
    ...overide,
  };
}

export function createTestInsertNotification(
  overide?: Partial<Workspace.NotificationInsertItemInterface>
): Workspace.NotificationInsertItemInterface {
  return {
    id: generateTestKSUID(Workspace.UIDPrefix.NOTIFICATION),
    ...TypeProperty,
    ...TitleProperty,
    ...MessageProperty,
    ...overide,
  };
}

export function createTestModifyNotification(
  overide?: Partial<Workspace.NotificationModifyItemInterface>
): Workspace.NotificationModifyItemInterface {
  return {
    ...TypeProperty,
    ...TitleProperty,
    ...MessageProperty,
    ...overide,
  };
}
