import { JsonSchemaType } from "../../../../../../../schema";
import { PaginationPropertySchema } from "../../../../../../../models";
import { ProductTierResponseItemSchema } from "./response-item";

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
