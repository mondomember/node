// Types
import {
  NumericFieldInsertItem,
  TextFieldInsertItem,
  ToggleFieldInsertItem,
} from "./types";

export type FieldInsertItem =
  | NumericFieldInsertItem
  | TextFieldInsertItem
  | ToggleFieldInsertItem;
