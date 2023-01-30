import { JsonSchemaType } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";
import { RefundResponseItemSchema } from "./response-item";

export const RefundResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: RefundResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
