import { JsonSchemaType } from "../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
} from "../../../models";
import {
  NamePropertySchema,
  SlugPropertySchema,
  TenantIdPropertySchema,
  MembershipPropertySchema,
  SandboxPropertySchema,
} from "./base";

export const TenantResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "name", "slug", "membership", "createdAt", "updatedAt"],
  properties: {
    ...TenantIdPropertySchema,
    ...NamePropertySchema,
    ...SlugPropertySchema,
    ...SandboxPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
    ...MembershipPropertySchema,
  },
};
