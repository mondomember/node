import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  LastUpdatedPropertySchema,
} from "../../../../../models";

import {
  JobIdPropertySchema,
  StatusPropertySchema,
  FilenamePropertySchema,
  TypePropertySchema,
  OwnerPropertySchema,
  TotalCountPropertySchema,
  ImportCountPropertySchema,
  ErrorCountPropertySchema,
} from "./base";

export const JobResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "status",
    "filename",
    "type",
    "totalCount",
    "importCount",
    "errorCount",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...JobIdPropertySchema,
    ...StatusPropertySchema,
    ...FilenamePropertySchema,
    ...TypePropertySchema,
    ...OwnerPropertySchema,
    ...TotalCountPropertySchema,
    ...ImportCountPropertySchema,
    ...ErrorCountPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
