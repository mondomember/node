import { PaginationProperty } from "../../common";

export interface SearchResponseList<Item = any>
  extends Partial<PaginationProperty> {
  items?: Item[];
}
