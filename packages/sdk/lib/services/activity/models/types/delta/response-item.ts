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
  TypePropertySchema,
  OperationPropertySchema,
  DiffSchema,
} from "./base";
import { Activity } from "@mondomember/model";

export const DeltaActivityResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "performedBy",
    "type",
    "operation",
    "source",
    "createdAt",
    "updatedAt",
  ],

  properties: {
    ...constructUIDPropertySchema(Activity.UIDPrefix.ACTIVITY),
    ...PerformedByPropertySchema,
    ...SourcePropertySchema,
    ...TypePropertySchema,
    ...OperationPropertySchema,
    ...DiffSchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
