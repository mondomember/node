import { IdProperty } from "../../../common";

import { ContactInsertItem } from "./insert-item";
import { ContactModifyItem } from "./modify-item";

export interface ContactImportInsertItem extends ContactInsertItem {}

export interface ContactImportModifyItem
  extends ContactModifyItem,
    IdProperty {}

export type ContactImportItem =
  | ContactImportInsertItem
  | ContactImportModifyItem;
