import { JsonSchemaType } from "../../../../../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../../../../../models";
import {
  ProductTierPriceResponseItemSchema,
  ProductTierPriceResponseItemInterface,
} from "./response-item";

export const ProductTierPriceResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: ProductTierPriceResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface ProductTierPriceResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: ProductTierPriceResponseItemInterface[];
}
