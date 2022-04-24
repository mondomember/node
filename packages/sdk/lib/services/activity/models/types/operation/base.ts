import { JsonSchemaType } from "../../../../../schema";
import { ActivityType, OperationType } from "../../constants";

export const OperationPropertySchema = {
  operation: {
    type: JsonSchemaType.STRING,
    enum: [
      OperationType.CREATE,
      OperationType.UPDATE,
      OperationType.DELETE,
      OperationType.AUTOMATION,
    ],
  },
};

export interface OperationPropertyInterface {
  operation:
    | typeof OperationType.CREATE
    | typeof OperationType.UPDATE
    | typeof OperationType.DELETE
    | typeof OperationType.AUTOMATION;
}

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [ActivityType.OPERATION],
  },
};

export interface TypePropertyInterface {
  type: typeof ActivityType.OPERATION;
}

export const MessagePropertySchema = {
  message: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export interface MessagePropertyInterface {
  message: string;
}

export const TargetPropertySchema = {
  target: {
    type: JsonSchemaType.STRING,
  },
};

export interface TargetPropertyInterface {
  target: string;
}
