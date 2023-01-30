import { JsonSchemaType } from "../../../../../schema";
import {
  UUIDPropertySchema,
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
} from "../../../../../models";
import {
  NamePropertySchema,
  SlugPropertySchema,
} from "../../../../workspace/models/base";

export const IdentityWorkspaceResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "name", "slug", "createdAt", "updatedAt"],
  properties: {
    ...UUIDPropertySchema,
    ...NamePropertySchema,
    ...SlugPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
