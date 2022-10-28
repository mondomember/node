import { JsonSchemaType } from "../../../../../schema";
import {
  IdPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";
import {
  NamePropertySchema,
  NamePropertyInterface,
  SlugPropertySchema,
  SlugPropertyInterface,
  TenantIdPropertySchema,
} from "./base";

export const WorkspaceTenantInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["name"],
  properties: {
    ...TenantIdPropertySchema,
    ...NamePropertySchema,
    ...SlugPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface WorkspaceTenantInsertItemInterface
  extends Partial<IdPropertyInterface>,
    NamePropertyInterface,
    Partial<SlugPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
