import { Chance } from "chance";
import { generateTestKSUID } from "../../utils";

import { CRM } from "@mondomember/sdk";
import {
  createCreatedAtProperty,
  createMetadataProperty,
  createPropertiesProperty,
  createUpdatedAtProperty,
} from "../../utils";

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

export function createTestContact(
  overides?: Partial<CRM.ContactResponseItemInterface>
) {
  return {
    id: generateTestKSUID(CRM.UIDPrefix.CONTACT),
    ...EmailProperty,
    ...FirstNameProperty,
    ...LastNameProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...createPropertiesProperty(),
    ...overides,
  };
}

export function createTestInsertContact(
  overrides?: Partial<CRM.ContactInsertItemInterface>
): CRM.ContactInsertItemInterface {
  return {
    ...EmailProperty,
    ...FirstNameProperty,
    ...LastNameProperty,
    ...overrides,
  };
}

export function createTestModifyContact(
  overrides?: Partial<CRM.ContactModifyItemInterface>
): CRM.ContactModifyItemInterface {
  return {
    ...EmailProperty,
    ...FirstNameProperty,
    ...LastNameProperty,
    ...overrides,
  };
}
