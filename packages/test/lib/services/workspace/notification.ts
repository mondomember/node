import { Chance } from "chance";
import {
  generateTestKSUID,
  createCreatedAtProperty,
  createUpdatedAtProperty,
  createLastUpdatedProperty,
} from "../../utils";

import { Workspace } from "@mondomember/model";

const chance: Chance.Chance = new Chance();

const MessageProperty = {
  message: chance.paragraph(),
};

const TitleProperty = {
  title: chance.sentence(),
};

const TypeProperty = {
  type: chance.pickone([
    Workspace.NotificationType.INFO,
    Workspace.NotificationType.IMPORT,
  ]),
};

export function createTestNotification(
  overide?: Partial<Workspace.NotificationResponseItem>
): Workspace.NotificationResponseItem {
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
  overide?: Partial<Workspace.NotificationInsertItem>
): Workspace.NotificationInsertItem {
  return {
    id: generateTestKSUID(Workspace.UIDPrefix.NOTIFICATION),
    ...TypeProperty,
    ...TitleProperty,
    ...MessageProperty,
    ...overide,
  };
}

export function createTestModifyNotification(
  overide?: Partial<Workspace.NotificationModifyItem>
): Workspace.NotificationModifyItem {
  return {
    ...TypeProperty,
    ...TitleProperty,
    ...MessageProperty,
    ...overide,
  };
}
