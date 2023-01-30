// Types
import {
  NumericFieldModifyItem,
  TextFieldModifyItem,
  ToggleFieldModifyItem,
} from "./types";

export type FieldModifyItem =
  | NumericFieldModifyItem
  | TextFieldModifyItem
  | ToggleFieldModifyItem;
