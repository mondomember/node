import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  PropertiesPropertySchema,
} from "../../../../../models";

import {
  EmailPropertySchema,
  FirstNamePropertySchema,
  LastNamePropertySchema,
} from "./base";

export const ContactModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...EmailPropertySchema,
    ...FirstNamePropertySchema,
    ...LastNamePropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};
