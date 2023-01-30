import { JsonSchemaType } from "../../../../../schema";
import { MetadataPropertySchema } from "../../../../../models";

import { FirstNamePropertySchema, LastNamePropertySchema } from "./base";

export const UserModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...FirstNamePropertySchema,
    ...LastNamePropertySchema,
    ...MetadataPropertySchema,
  },
};
