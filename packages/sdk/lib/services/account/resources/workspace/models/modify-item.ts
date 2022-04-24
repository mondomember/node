import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";
import { NameSchema, NameInterface } from "./base";

export const WorkspaceTenantModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...NameSchema,
    ...MetadataPropertySchema,
  },
};

export interface WorkspaceTenantModifyItemInterface
  extends Partial<NameInterface>,
    Partial<MetadataPropertyInterface> {}
