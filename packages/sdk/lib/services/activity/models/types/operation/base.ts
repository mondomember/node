import { JsonSchemaType } from "../../../../../schema";
import { Activity } from "@mondomember/model";

export const OperationPropertySchema = {
  operation: {
    type: JsonSchemaType.STRING,
    enum: [
      Activity.OperationType.CREATE,
      Activity.OperationType.UPDATE,
      Activity.OperationType.DELETE,
      Activity.OperationType.AUTOMATION,
    ],
  },
};

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [Activity.ActivityType.OPERATION],
  },
};

export const MessagePropertySchema = {
  message: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export const TargetPropertySchema = {
  target: {
    type: JsonSchemaType.STRING,
  },
};
