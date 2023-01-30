import { JsonSchemaType } from "../../../../../../../schema";
import { PaginationPropertySchema } from "../../../../../../../models";
import { InvoiceTransactionResponseItemSchema } from "./response-item";

export const InvoiceTransactionResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: InvoiceTransactionResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
