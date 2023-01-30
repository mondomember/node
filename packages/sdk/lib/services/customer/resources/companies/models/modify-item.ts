import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  PropertiesPropertySchema,
} from "../../../../../models";

import { NamePropertySchema } from "./base";

export const CompanyModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...NamePropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};
