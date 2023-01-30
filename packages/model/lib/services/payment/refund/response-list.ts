import { PaginationProperty } from "../../../common";
import { RefundResponseItem } from "./response-item";

export interface RefundResponseList extends Partial<PaginationProperty> {
  items?: RefundResponseItem[];
}
