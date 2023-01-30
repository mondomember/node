import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
} from "../../../../../models";
import { PerformedByPropertySchema, SourcePropertySchema } from "../../base";

import {
  MessagePropertySchema,
  OperationPropertySchema,
  TargetPropertySchema,
  TypePropertySchema,
} from "./base";
import { Activity } from "@mondomember/model";

export const OperationActivityResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "performedBy",
    "type",
    "message",
    "operation",
    "source",
    "target",
    "createdAt",
    "updatedAt",
  ],

  properties: {
    ...constructUIDPropertySchema(Activity.UIDPrefix.ACTIVITY),
    ...PerformedByPropertySchema,
    ...SourcePropertySchema,
    ...TypePropertySchema,
    ...MessagePropertySchema,
    ...OperationPropertySchema,
    ...TargetPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
