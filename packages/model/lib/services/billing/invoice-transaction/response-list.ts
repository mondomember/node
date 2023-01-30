import { PaginationProperty } from "../../../common";
import { InvoiceTransactionResponseItem } from "./response-item";

export interface InvoiceTransactionResponseList
  extends Partial<PaginationProperty> {
  items?: InvoiceTransactionResponseItem[];
}
