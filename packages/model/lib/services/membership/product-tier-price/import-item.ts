import { VersionProperty } from "./base";

import { ProductTierPriceInsertItem } from "./insert-item";
import { ProductTierPriceModifyItem } from "./modify-item";

export interface ProductTierPriceImportInsertItem
  extends ProductTierPriceInsertItem {
  product: string;
  tier: string;
}

export interface ProductTierPriceImportModifyItem
  extends ProductTierPriceModifyItem,
    VersionProperty {
  product: string;
  tier: string;
}

export type ProductTierPriceImportItem =
  | ProductTierPriceImportInsertItem
  | ProductTierPriceImportModifyItem;
