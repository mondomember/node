import { IdProperty } from "../../../common";

import { MembershipInsertItem } from "./insert-item";
import { MembershipModifyItem } from "./modify-item";

export interface MembershipImportInsertItem extends MembershipInsertItem {}

export interface MembershipImportModifyItem
  extends MembershipModifyItem,
    IdProperty {}

export type MembershipImportItem =
  | MembershipImportInsertItem
  | MembershipImportModifyItem;
