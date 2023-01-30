import { JsonSchemaType } from "../../../../../schema";
import { MetadataPropertySchema } from "../../../../../models";

import {
  EmailPropertySchema,
  FirstNamePropertySchema,
  LastNamePropertySchema,
} from "./base";

export const UserInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["email"],
  properties: {
    ...EmailPropertySchema,
    ...FirstNamePropertySchema,
    ...LastNamePropertySchema,
    ...MetadataPropertySchema,
  },
};
