import { JsonSchemaType } from "../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
  PropertiesPropertySchema,
} from "../../../../../models";

import { ContactPropertySchema, CompanyPropertySchema } from "./base";

export const CompanyContactResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["company", "contact", "createdAt", "updatedAt"],
  properties: {
    ...ContactPropertySchema,
    ...CompanyPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
