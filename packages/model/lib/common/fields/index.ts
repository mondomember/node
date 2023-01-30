export * from "./field.set";
export * from "./field.factory";

import {
  SerializedNumericField,
  SerializedNumericFieldUpsert,
  SerializedTextField,
  SerializedTextFieldUpsert,
  SerializedToggleField,
  SerializedToggleFieldUpsert,
  NumericField,
  TextField,
  ToggleField,
  NumericFieldUpsert,
  TextFieldUpsert,
  ToggleFieldUpsert,
} from "./types";

// Unions
export type Field = NumericField | TextField | ToggleField;
export type FieldUpsert =
  | NumericFieldUpsert
  | TextFieldUpsert
  | ToggleFieldUpsert;

export type SerializedField =
  | SerializedNumericField
  | SerializedTextField
  | SerializedToggleField;

export type SerializedFieldUpsert =
  | SerializedNumericFieldUpsert
  | SerializedTextFieldUpsert
  | SerializedToggleFieldUpsert;

export type SerializedFields = {
  [key: string]: SerializedField;
};
