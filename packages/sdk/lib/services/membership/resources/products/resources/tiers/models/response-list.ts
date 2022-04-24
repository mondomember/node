import { JsonSchemaType } from "../../../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../../../models";
import {
  ProductTierResponseItemSchema,
  ProductTierResponseItemInterface,
} from "./response-item";

export const ProductTierResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: ProductTierResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface ProductTierResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: ProductTierResponseItemInterface[];
}
