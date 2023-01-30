import { JsonSchemaType } from "../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
  PropertiesPropertySchema,
} from "../../../../../models";

import {
  ContactIdPropertySchema,
  EmailPropertySchema,
  FirstNamePropertySchema,
  LastNamePropertySchema,
} from "./base";

export const ContactResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "email", "createdAt", "updatedAt"],
  properties: {
    ...ContactIdPropertySchema,
    ...EmailPropertySchema,
    ...FirstNamePropertySchema,
    ...LastNamePropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
