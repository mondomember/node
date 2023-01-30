import { Chance } from "chance";
import { Customer } from "@mondomember/model";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createMetadataProperty,
  createPropertiesProperty,
  createUpdatedAtProperty,
} from "../../utils";

const chance: Chance.Chance = new Chance();

const NameProperty = {
  name: chance.company(),
};

export function createTestCompany(
  overides?: Partial<Customer.CompanyResponseItem>
) {
  return {
    id: generateTestKSUID(Customer.UIDPrefix.COMPANY),
    ...NameProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...createPropertiesProperty(),
    ...overides,
  };
}

export function createTestInsertCompany(
  overrides?: Partial<Customer.CompanyInsertItem>
): Customer.CompanyInsertItem {
  return {
    ...NameProperty,
    ...overrides,
  };
}

export function createTestModifyCompany(
  overrides?: Partial<Customer.CompanyModifyItem>
): Customer.CompanyModifyItem {
  return {
    ...NameProperty,
    ...overrides,
  };
}
