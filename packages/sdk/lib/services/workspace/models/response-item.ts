import { JsonSchemaType } from "../../../schema";
import {
  IdPropertyInterface,
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
  UpdatedAtPropertySchema,
  UpdatedAtPropertyInterface,
  DeletedAtPropertySchema,
  DeletedAtPropertyInterface,
  LastUpdatedPropertySchema,
  LastUpdatedPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../models";
import {
  NamePropertySchema,
  NamePropertyInterface,
  SlugPropertySchema,
  SlugPropertyInterface,
  TenantIdPropertySchema,
  MembershipPropertyInterface,
  MembershipPropertySchema,
  SandboxPropertySchema,
  SandboxPropertyInterface,
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

export interface TenantResponseItemInterface
  extends IdPropertyInterface,
    NamePropertyInterface,
    SlugPropertyInterface,
    MembershipPropertyInterface,
    Partial<SandboxPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
