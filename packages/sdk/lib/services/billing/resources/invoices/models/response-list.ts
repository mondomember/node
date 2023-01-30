import { JsonSchemaType } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";
import { InvoiceResponseItemSchema } from "./response-item";

export const InvoiceResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: InvoiceResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
