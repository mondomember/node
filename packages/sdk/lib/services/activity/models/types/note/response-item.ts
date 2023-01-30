import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
} from "../../../../../models";
import { PerformedByPropertySchema, SourcePropertySchema } from "../../base";

import { MessagePropertySchema, TypePropertySchema } from "./base";
import { Activity } from "@mondomember/model";

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
    ...constructUIDPropertySchema(Activity.UIDPrefix.ACTIVITY),
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
