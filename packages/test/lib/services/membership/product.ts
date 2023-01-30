import { Chance } from "chance";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";

import { Membership } from "@mondomember/model";

const chance: Chance.Chance = new Chance();

const LabelProperty = {
  label: chance.word(),
};

const DescriptionProperty = {
  description: chance.paragraph({ sentences: 3 }),
};

export function createTestProduct(
  overide?: Partial<Membership.ProductResponseItem>
): Membership.ProductResponseItem {
  return {
    id: generateTestKSUID(Membership.UIDPrefix.PRODUCT),
    ...LabelProperty,
    ...DescriptionProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...overide,
  };
}

export function createTestInsertProduct(
  overide?: Partial<Membership.ProductInsertItem>
): Membership.ProductInsertItem {
  return {
    ...LabelProperty,
    ...DescriptionProperty,
    ...createMetadataProperty(),
    ...overide,
  };
}

export function createTestModifyProduct(
  overide?: Partial<Membership.ProductModifyItem>
): Membership.ProductModifyItem {
  return {
    ...LabelProperty,
    ...DescriptionProperty,
    ...createMetadataProperty(),
    ...overide,
  };
}
