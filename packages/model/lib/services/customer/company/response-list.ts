import { PaginationProperty } from "../../../common";
import { CompanyResponseItem } from "./response-item";

export interface CompanyResponseList extends Partial<PaginationProperty> {
  items?: CompanyResponseItem[];
}
