import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  InvoiceResponseItemSchema,
  InvoiceResponseItemInterface,
} from "./response-item";

export const InvoiceResponseListSchema: JsonSchema = {
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

export interface InvoiceResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: InvoiceResponseItemInterface[];
}
