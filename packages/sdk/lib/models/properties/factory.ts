import { SerializedProperty, Property } from "./interfaces";
import { FieldType } from "../constants";
import { NumericProperty, TextProperty, ToggleProperty } from "./types";

export function createProperty(property: SerializedProperty): Property {
  switch (property.type) {
    case FieldType.NUMERIC: {
      return new NumericProperty(property);
    }
    case FieldType.TOGGLE: {
      return new ToggleProperty(property);
    }
    default: {
      return new TextProperty(property);
    }
  }
}
