import { JsonSchemaType } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  CompanyResponseItemSchema,
  CompanyResponseItemInterface,
} from "./response-item";

export const CompanyResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: CompanyResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface CompanyResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: CompanyResponseItemInterface[];
}
