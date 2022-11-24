import { JsonSchemaType } from "../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../models";
import {
  NamePropertySchema,
  NamePropertyInterface,
  SlugPropertySchema,
  SlugPropertyInterface,
} from "./base";

export const TenantModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...NamePropertySchema,
    ...SlugPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface TenantModifyItemInterface
  extends Partial<NamePropertyInterface>,
    Partial<SlugPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
