import { JsonSchemaType } from "../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../models";
import {
  TenantResponseItemSchema,
  TenantResponseItemInterface,
} from "./response-item";

export const TenantResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: TenantResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface TenantResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: TenantResponseItemInterface[];
}
