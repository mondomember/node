import { PaginationProperty } from "../../../common";
import { InvoiceResponseItem } from "./response-item";

export interface InvoiceResponseList extends Partial<PaginationProperty> {
  items?: InvoiceResponseItem[];
}
