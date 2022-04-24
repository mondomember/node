import { JsonSchemaType } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  ProductResponseItemSchema,
  ProductResponseItemInterface,
} from "./response-item";

export const ProductResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: ProductResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface ProductResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: ProductResponseItemInterface[];
}
