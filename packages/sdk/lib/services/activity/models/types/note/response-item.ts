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
  TypePropertySchema,
  TypePropertyInterface,
  MessagePropertyInterface,
} from "./base";
import { UIDPrefix } from "../../../constants";

export const NoteActivityResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "performedBy",
    "type",
    "message",
    "source",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...constructUIDPropertySchema(UIDPrefix.ACTIVITY),
    ...PerformedByPropertySchema,
    ...SourcePropertySchema,
    ...TypePropertySchema,
    ...MessagePropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface NoteActivityResponseItemInterface
  extends IdPropertyInterface,
    PerformedByPropertyInterface,
    TypePropertyInterface,
    MessagePropertyInterface,
    SourcePropertyInterface,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface> {}
