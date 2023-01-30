import { IdProperty, MetadataProperty } from "../../../common";

import { DescriptionProperty, LabelProperty } from "./base";

export interface ProductTierImportInsertItem
  extends Partial<DescriptionProperty>,
    Partial<MetadataProperty>,
    Partial<IdProperty>,
    LabelProperty {
  price?: {
    amount: number;
  };
  product: string;
}

export interface ProductTierImportModifyItem
  extends Partial<LabelProperty>,
    Partial<DescriptionProperty>,
    Partial<MetadataProperty>,
    IdProperty {
  price?:
    | {
        version: number;
      }
    | {
        amount: number;
      };
  product: string;
}

export type ProductTierImportItem =
  | ProductTierImportInsertItem
  | ProductTierImportModifyItem;
