import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";
import { NamePropertySchema, NamePropertyInterface } from "./base";

export const WorkspaceTenantModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...NamePropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface WorkspaceTenantModifyItemInterface
  extends Partial<NamePropertyInterface>,
    Partial<MetadataPropertyInterface> {}
