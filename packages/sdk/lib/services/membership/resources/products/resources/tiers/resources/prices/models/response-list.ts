import { JsonSchemaType } from "../../../../../../../../../schema";
import { PaginationPropertySchema } from "../../../../../../../../../models";
import { ProductTierPriceResponseItemSchema } from "./response-item";

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
