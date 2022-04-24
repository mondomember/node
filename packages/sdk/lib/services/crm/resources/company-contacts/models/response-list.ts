import { JsonSchemaType } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  CompanyContactResponseItemSchema,
  CompanyContactResponseItemInterface,
} from "./response-item";

export const CompanyContactResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: CompanyContactResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface CompanyContactResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: CompanyContactResponseItemInterface[];
}
