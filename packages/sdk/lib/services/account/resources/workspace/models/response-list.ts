import { JsonSchemaType } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  WorkspaceTenantResponseItemSchema,
  WorkspaceTenantResponseItemInterface,
} from "./response-item";

export const WorkspaceTenantResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: WorkspaceTenantResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface WorkspaceTenantResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: WorkspaceTenantResponseItemInterface[];
}
