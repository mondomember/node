import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  IdPropertyInterface,
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
  UpdatedAtPropertySchema,
  UpdatedAtPropertyInterface,
  DeletedAtPropertySchema,
  DeletedAtPropertyInterface,
  LastUpdatedPropertySchema,
  LastUpdatedPropertyInterface,
} from "../../../../../models";
import {
  PerformedByPropertySchema,
  SourcePropertySchema,
  PerformedByPropertyInterface,
  SourcePropertyInterface,
} from "../../base";

import {
  MessagePropertySchema,
  OperationPropertySchema,
  TargetPropertySchema,
  TypePropertySchema,
  TypePropertyInterface,
  MessagePropertyInterface,
  OperationPropertyInterface,
  TargetPropertyInterface,
} from "./base";

import { UIDPrefix } from "../../../constants";

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
    ...constructUIDPropertySchema(UIDPrefix.ACTIVITY),
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

export interface OperationActivityResponseItemInterface
  extends IdPropertyInterface,
    PerformedByPropertyInterface,
    TypePropertyInterface,
    MessagePropertyInterface,
    OperationPropertyInterface,
    TargetPropertyInterface,
    SourcePropertyInterface,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface> {}
