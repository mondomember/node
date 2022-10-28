import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";
import {
  NamePropertySchema,
  NamePropertyInterface,
  SlugPropertySchema,
  SlugPropertyInterface,
} from "./base";

export const WorkspaceTenantModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...NamePropertySchema,
    ...SlugPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface WorkspaceTenantModifyItemInterface
  extends Partial<NamePropertyInterface>,
    Partial<SlugPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
