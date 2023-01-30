import { PaginationProperty } from "../../../common";
import { CompanyContactResponseItem } from "./response-item";

export interface CompanyContactResponseList
  extends Partial<PaginationProperty> {
  items?: CompanyContactResponseItem[];
}
