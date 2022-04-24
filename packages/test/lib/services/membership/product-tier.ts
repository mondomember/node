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

export function createTestProductTier(
  overide?: Partial<Membership.ProductTierResponseItemInterface>
): Membership.ProductTierResponseItemInterface {
  return {
    id: generateTestKSUID(Membership.UIDPrefix.PRODUCT_TIER),
    ...LabelProperty,
    price: {
      version: chance.natural({ min: 1, max: 99 }),
      amount: chance.natural({ min: 1, max: 9999 }),
    },
    ...DescriptionProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...overide,
  };
}

export function createTestInsertProductTier(
  overide?: Partial<Membership.ProductTierInsertItemInterface>
): Membership.ProductTierInsertItemInterface {
  return {
    ...LabelProperty,
    price: {
      amount: chance.natural({ min: 1, max: 9999 }),
    },
    ...DescriptionProperty,
    ...createMetadataProperty(),
    ...overide,
  };
}

export function createTestModifyProductTier(
  overide?: Partial<Membership.ProductTierModifyItemInterface>
): Membership.ProductTierModifyItemInterface {
  return {
    ...LabelProperty,
    ...DescriptionProperty,
    ...createMetadataProperty(),
    ...overide,
  };
}
