import { JsonSchemaType } from "../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
  PropertiesPropertySchema,
} from "../../../../../models";

import { NamePropertySchema, CompanyIdPropertySchema } from "./base";

export const CompanyResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "name", "createdAt", "updatedAt"],
  properties: {
    ...CompanyIdPropertySchema,
    ...NamePropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
