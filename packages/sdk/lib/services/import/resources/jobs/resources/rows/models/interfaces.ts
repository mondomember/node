export const RowOperation = {
  CREATE: "Create",
  UPDATE: "Update",
} as const;

export type AnyRowOperation = typeof RowOperation[keyof typeof RowOperation];

export const RowOperationEnum = [RowOperation.CREATE, RowOperation.UPDATE];
