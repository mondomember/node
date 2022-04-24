import { Chance } from "chance";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";

import { Membership } from "@mondomember/sdk";

const chance: Chance.Chance = new Chance();

const LabelProperty = {
  label: chance.word(),
};

const DescriptionProperty = {
  description: chance.paragraph({ sentences: 3 }),
};

export function createTestProduct(
  overide?: Partial<Membership.ProductResponseItemInterface>
): Membership.ProductResponseItemInterface {
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
  overide?: Partial<Membership.ProductInsertItemInterface>
): Membership.ProductInsertItemInterface {
  return {
    ...LabelProperty,
    ...DescriptionProperty,
    ...createMetadataProperty(),
    ...overide,
  };
}

export function createTestModifyProduct(
  overide?: Partial<Membership.ProductModifyItemInterface>
): Membership.ProductModifyItemInterface {
  return {
    ...LabelProperty,
    ...DescriptionProperty,
    ...createMetadataProperty(),
    ...overide,
  };
}
