import { Chance } from "chance";

import {
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";

import { Membership } from "@mondomember/model";

const chance: Chance.Chance = new Chance();

const AmountProperty = {
  amount: chance.natural({ min: 1, max: 9999 }),
};

const DescriptionProperty = {
  description: chance.paragraph({ sentences: 3 }),
};

export function createTestProductTierPrice(
  overide?: Partial<Membership.ProductTierPriceResponseItem>
): Membership.ProductTierPriceResponseItem {
  return {
    version: chance.natural({ min: 1, max: 100 }),
    ...AmountProperty,
    ...DescriptionProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...overide,
  };
}

export function createTestInsertProductTierPrice(
  overide?: Partial<Membership.ProductTierPriceInsertItem>
): Membership.ProductTierPriceInsertItem {
  return {
    ...AmountProperty,
    ...DescriptionProperty,
    ...createMetadataProperty(),
    ...overide,
  };
}

export function createTestModifyProductTierPrice(
  overide?: Partial<Membership.ProductTierPriceModifyItem>
): Membership.ProductTierPriceModifyItem {
  return {
    ...DescriptionProperty,
    ...createMetadataProperty(),
    ...overide,
  };
}
