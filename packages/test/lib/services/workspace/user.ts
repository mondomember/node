import { Chance } from "chance";
import {
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";
import { Workspace } from "@mondomember/model";

const chance: Chance.Chance = new Chance();

const EmailProperty = {
  email: chance.email(),
};

const FirstNameProperty = {
  firstName: chance.first(),
};

const LastNameProperty = {
  lastName: chance.last(),
};

export function createTestUser(
  overides?: Partial<Workspace.UserResponseItem>
): Workspace.UserResponseItem {
  return {
    id: chance.guid(),
    ...EmailProperty,
    ...FirstNameProperty,
    ...LastNameProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...overides,
  };
}

export function createTestInsertUser(
  overides?: Partial<Workspace.UserInsertItem>
): Workspace.UserInsertItem {
  return {
    ...EmailProperty,
    ...FirstNameProperty,
    ...LastNameProperty,
    ...overides,
  };
}

export function createTestModifyUser(
  overide?: Partial<Workspace.UserModifyItem>
): Workspace.UserModifyItem {
  return {
    ...FirstNameProperty,
    ...LastNameProperty,
    ...overide,
  };
}
