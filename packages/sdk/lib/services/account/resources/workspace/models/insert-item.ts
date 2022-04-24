import { JsonSchemaType } from "../../../../../schema";
import {
  IdPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";
import { NameSchema, NameInterface, TenantIdPropertySchema } from "./base";

export const WorkspaceTenantInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["name"],
  properties: {
    ...TenantIdPropertySchema,
    ...NameSchema,
    ...MetadataPropertySchema,
  },
};

export interface WorkspaceTenantInsertItemInterface
  extends Partial<IdPropertyInterface>,
    NameInterface,
    Partial<MetadataPropertyInterface> {}
