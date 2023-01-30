import { Chance } from "chance";
import { generateTestKSUID } from "../../utils";

import { Customer } from "@mondomember/model";
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
  overides?: Partial<Customer.ContactResponseItem>
) {
  return {
    id: generateTestKSUID(Customer.UIDPrefix.CONTACT),
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
  overrides?: Partial<Customer.ContactInsertItem>
): Customer.ContactInsertItem {
  return {
    ...EmailProperty,
    ...FirstNameProperty,
    ...LastNameProperty,
    ...overrides,
  };
}

export function createTestModifyContact(
  overrides?: Partial<Customer.ContactModifyItem>
): Customer.ContactModifyItem {
  return {
    ...EmailProperty,
    ...FirstNameProperty,
    ...LastNameProperty,
    ...overrides,
  };
}
