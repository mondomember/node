import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  IdPropertyInterface,
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
  UpdatedAtPropertySchema,
  UpdatedAtPropertyInterface,
  LastUpdatedPropertySchema,
  LastUpdatedPropertyInterface,
} from "../../../../../models";

import {
  JobIdPropertySchema,
  StatusPropertySchema,
  StatusPropertyInterface,
  FilenamePropertySchema,
  FilenamePropertyInterface,
  TypePropertySchema,
  TypePropertyInterface,
  OwnerPropertySchema,
  OwnerPropertyInterface,
  TotalCountPropertySchema,
  TotalCountPropertyInterface,
  ImportCountPropertySchema,
  ImportCountPropertyInterface,
  ErrorCountPropertySchema,
  ErrorCountPropertyInterface,
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

export interface JobResponseItemInterface
  extends IdPropertyInterface,
    StatusPropertyInterface,
    FilenamePropertyInterface,
    TypePropertyInterface,
    TotalCountPropertyInterface,
    ImportCountPropertyInterface,
    ErrorCountPropertyInterface,
    Partial<OwnerPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<LastUpdatedPropertyInterface> {}
