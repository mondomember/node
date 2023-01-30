import {
  ContactUpsertPropertySchema,
  CompanyUpsertPropertySchema,
} from "./base";

import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  PropertiesPropertySchema,
} from "../../../../../models";

export const CompanyContactImportItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: true,
  required: ["company", "contact"],
  properties: {
    ...CompanyUpsertPropertySchema,
    ...ContactUpsertPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};
