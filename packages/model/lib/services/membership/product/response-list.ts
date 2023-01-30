import { PaginationProperty } from "../../../common";
import { ProductResponseItem } from "./response-item";

export interface ProductResponseList extends Partial<PaginationProperty> {
  items?: ProductResponseItem[];
}
