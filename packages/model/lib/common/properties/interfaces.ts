export type PropertyValue =
  | undefined
  | number
  | boolean
  | string
  | null
  | Record<string, unknown>;

import {
  SerializedNumericProperty,
  SerializedTextProperty,
  SerializedToggleProperty,
  NumericProperty,
  TextProperty,
  ToggleProperty,
} from "./types";

export type Property = NumericProperty | TextProperty | ToggleProperty;

// Unions
export type SerializedProperty =
  | SerializedNumericProperty
  | SerializedTextProperty
  | SerializedToggleProperty;

export type SerializedProperties = {
  [key: string]: SerializedProperty;
};
