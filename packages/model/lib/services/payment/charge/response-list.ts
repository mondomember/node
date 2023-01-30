import { PaginationProperty } from "../../../common";
import { ChargeResponseItem } from "./response-item";

export interface ChargeResponseList extends Partial<PaginationProperty> {
  items?: ChargeResponseItem[];
}
