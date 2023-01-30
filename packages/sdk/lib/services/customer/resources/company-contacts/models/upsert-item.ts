import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  PropertiesPropertySchema,
} from "../../../../../models";

export const CompanyContactUpsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};
