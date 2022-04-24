import { JsonSchemaType } from "../../../../../schema";
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
  },
};

export interface WorkspaceTenantResponseListInterface {
  items?: WorkspaceTenantResponseItemInterface[];
}
