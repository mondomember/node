import { IdProperty } from "../../../common";

import { ProductInsertItem } from "./insert-item";
import { ProductModifyItem } from "./modify-item";

export interface ProductImportInsertItem
  extends ProductInsertItem,
    Partial<IdProperty> {
  default?: boolean;
}

export interface ProductImportModifyItem extends ProductModifyItem, IdProperty {
  default?: boolean;
}

export type ProductImportItem =
  | ProductImportInsertItem
  | ProductImportModifyItem;
