import { ActivityType, OperationType } from "../../constants";

export interface OperationProperty {
  operation:
    | typeof OperationType.CREATE
    | typeof OperationType.UPDATE
    | typeof OperationType.DELETE
    | typeof OperationType.AUTOMATION;
}

export interface TypeProperty {
  type: typeof ActivityType.OPERATION;
}

export interface MessageProperty {
  message: string;
}

export interface TargetProperty {
  target: string;
}
