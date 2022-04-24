export const UIDPrefix = {
  FIELD: "fild",
} as const;

export const FieldType = {
  TEXT: "Text",
  TOGGLE: "Toggle",
  NUMERIC: "Numeric",
} as const;

export type AnyFieldType = typeof FieldType[keyof typeof FieldType];
