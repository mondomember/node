import { IdProperty } from "../../../common";
import { StatusProperty } from "./base";

import { ContractInsertItem } from "./insert-item";
import { ContractModifyItem } from "./modify-item";

export interface ContractImportInsertItem
  extends ContractInsertItem,
    Partial<StatusProperty> {}

export interface ContractImportModifyItem
  extends ContractModifyItem,
    IdProperty {}

export type ContractImportItem =
  | ContractImportInsertItem
  | ContractImportModifyItem;
