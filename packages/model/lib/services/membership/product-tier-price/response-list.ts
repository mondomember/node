import { PaginationProperty } from "../../../common";
import { ProductTierPriceResponseItem } from "./response-item";

export interface ProductTierPriceResponseList
  extends Partial<PaginationProperty> {
  items?: ProductTierPriceResponseItem[];
}
