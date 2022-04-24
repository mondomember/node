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
  TypePropertySchema,
  OperationPropertySchema,
  TypeInterface,
  DiffSchema,
  DiffPropertyInterface,
  OperationPropertyInterface,
} from "./base";
import { UIDPrefix } from "../../../constants";

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
    ...constructUIDPropertySchema(UIDPrefix.ACTIVITY),
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

export interface DeltaActivityResponseItemInterface
  extends IdPropertyInterface,
    PerformedByPropertyInterface,
    TypeInterface,
    OperationPropertyInterface,
    DiffPropertyInterface,
    SourcePropertyInterface,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface> {}
