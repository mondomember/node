import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  PropertiesPropertySchema,
  ExternalIdPropertySchema,
} from "../../../../../models";

import { NamePropertySchema } from "./base";

export const CompanyInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["name"],
  properties: {
    ...NamePropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
    ...ExternalIdPropertySchema,
  },
};
