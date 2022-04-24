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
  NumericPropertyInterface,
  TextPropertyInterface,
  TogglePropertyInterface,
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

/**
 * @deprecated use Property (above)
 */
export type PropertyInterface =
  | NumericPropertyInterface
  | TextPropertyInterface
  | TogglePropertyInterface;

export type SerializedProperties = {
  [key: string]: SerializedProperty;
};
