import { Chance } from "chance";
import {
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";

import { Account } from "@mondomember/sdk";

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
  overides?: Partial<Account.WorkspaceUserResponseItemInterface>
): Account.WorkspaceUserResponseItemInterface {
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
  overides?: Partial<Account.WorkspaceUserInsertItemInterface>
): Account.WorkspaceUserInsertItemInterface {
  return {
    ...EmailProperty,
    ...FirstNameProperty,
    ...LastNameProperty,
    ...overides,
  };
}

export function createTestModifyUser(
  overide?: Partial<Account.WorkspaceUserModifyItemInterface>
): Account.WorkspaceUserModifyItemInterface {
  return {
    ...FirstNameProperty,
    ...LastNameProperty,
    ...overide,
  };
}
