import { JsonSchemaType } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";
import { ProductResponseItemSchema } from "./response-item";

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
