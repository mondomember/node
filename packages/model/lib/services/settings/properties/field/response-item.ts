// Types
import {
  NumericFieldResponseItem,
  TextFieldResponseItem,
  ToggleFieldResponseItem,
} from "./types";

export type FieldResponseItem =
  | NumericFieldResponseItem
  | TextFieldResponseItem
  | ToggleFieldResponseItem;
