import { JsonSchemaType } from "../../../schema";
import {
  IdPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../models";
import {
  NamePropertySchema,
  NamePropertyInterface,
  SlugPropertySchema,
  SlugPropertyInterface,
  TenantIdPropertySchema,
} from "./base";

export const TenantInsertItemSchema = {
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

export interface TenantInsertItemInterface
  extends Partial<IdPropertyInterface>,
    NamePropertyInterface,
    Partial<SlugPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
