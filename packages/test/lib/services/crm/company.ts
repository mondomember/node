import { Chance } from "chance";
import { CRM } from "@mondomember/sdk";

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
  overides?: Partial<CRM.CompanyResponseItemInterface>
) {
  return {
    id: generateTestKSUID(CRM.UIDPrefix.COMPANY),
    ...NameProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...createPropertiesProperty(),
    ...overides,
  };
}

export function createTestInsertCompany(
  overrides?: Partial<CRM.CompanyInsertItemInterface>
): CRM.CompanyInsertItemInterface {
  return {
    ...NameProperty,
    ...overrides,
  };
}

export function createTestModifyCompany(
  overrides?: Partial<CRM.CompanyModifyItemInterface>
): CRM.CompanyModifyItemInterface {
  return {
    ...NameProperty,
    ...overrides,
  };
}
