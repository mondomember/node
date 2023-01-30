import { PaginationProperty } from "../../../common";
import { RowResponseItem } from "./response-item";

export interface RowResponseList extends Partial<PaginationProperty> {
  items?: RowResponseItem[];
}
