import { IdProperty } from "../../../common";

import { CompanyInsertItem } from "./insert-item";
import { CompanyModifyItem } from "./modify-item";

export interface CompanyImportInsertItem extends CompanyInsertItem {}

export interface CompanyImportModifyItem
  extends CompanyModifyItem,
    IdProperty {}

export type CompanyImportItem =
  | CompanyImportInsertItem
  | CompanyImportModifyItem;
