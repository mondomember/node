import { JsonSchemaType, JsonSchema } from "../../../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../../../models";
import {
  InvoiceTransactionResponseItemSchema,
  InvoiceTransactionResponseItemInterface,
} from "./response-item";

export const InvoiceTransactionResponseListSchema: JsonSchema = {
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

export interface InvoiceTransactionResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: InvoiceTransactionResponseItemInterface[];
}
