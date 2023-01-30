import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  PropertiesPropertySchema,
  ExternalIdPropertySchema,
} from "../../../../../models";

import {
  EmailPropertySchema,
  FirstNamePropertySchema,
  LastNamePropertySchema,
} from "./base";

export const ContactInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["email"],
  properties: {
    ...EmailPropertySchema,
    ...FirstNamePropertySchema,
    ...LastNamePropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
    ...ExternalIdPropertySchema,
  },
};
