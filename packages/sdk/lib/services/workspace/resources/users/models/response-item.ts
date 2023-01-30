import { JsonSchemaType } from "../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
} from "../../../../../models";

import {
  UserIdPropertySchema,
  EmailPropertySchema,
  FirstNamePropertySchema,
  LastNamePropertySchema,
} from "./base";

export const UserResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "email", "createdAt", "updatedAt"],
  properties: {
    ...UserIdPropertySchema,
    ...EmailPropertySchema,
    ...FirstNamePropertySchema,
    ...LastNamePropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...MetadataPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
