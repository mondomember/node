import { JsonSchemaType } from "../../../../../schema";
import {
  IdPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";
import {
  NamePropertySchema,
  NamePropertyInterface,
  TenantIdPropertySchema,
} from "./base";

export const WorkspaceTenantInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["name"],
  properties: {
    ...TenantIdPropertySchema,
    ...NamePropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface WorkspaceTenantInsertItemInterface
  extends Partial<IdPropertyInterface>,
    NamePropertyInterface,
    Partial<MetadataPropertyInterface> {}
