export const ActivityType = {
  NOTE: "Note",
  DELTA: "Delta",
  OPERATION: "Operation",
} as const;

export type AnyActivityType = typeof ActivityType[keyof typeof ActivityType];

export const PerformerType = {
  SYSTEM: "System",
  GUEST: "Guest",
  IDENTITY: "Identity",
  AUTOMATION: "Automation",
  WORKFLOW: "Workflow",
} as const;

export type AnyPerformerType = typeof PerformerType[keyof typeof PerformerType];

export const OperationType = {
  CREATE: "Create",
  UPDATE: "Update",
  DELETE: "Delete",
  AUTOMATION: "Automation",
} as const;

export type AnyOperationType = typeof OperationType[keyof typeof OperationType];
