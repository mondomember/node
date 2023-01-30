import { SerializedField, Field, SerializedFieldUpsert, FieldUpsert } from ".";
import { FieldType } from "../constants";
import {
  NumericField,
  NumericFieldUpsert,
  TextField,
  TextFieldUpsert,
  ToggleField,
  ToggleFieldUpsert,
} from "./types";

export function createField(field: SerializedField): Field {
  switch (field.type) {
    case FieldType.NUMERIC:
      return new NumericField(field);

    case FieldType.TOGGLE:
      return new ToggleField(field);

    default:
      return new TextField(field);
  }
}

export function createFieldUpsert(field: SerializedFieldUpsert): FieldUpsert {
  switch (field.type) {
    case FieldType.NUMERIC:
      return new NumericFieldUpsert(field);

    case FieldType.TOGGLE:
      return new ToggleFieldUpsert(field);

    default:
      return new TextFieldUpsert(field);
  }
}
