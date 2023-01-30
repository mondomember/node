import { PaginationProperty } from "../../../common";
import { ProductTierResponseItem } from "./response-item";

export interface ProductTierResponseList extends Partial<PaginationProperty> {
  items?: ProductTierResponseItem[];
}
