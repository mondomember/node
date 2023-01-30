import { PaginationProperty } from "../../common";
import { ActivityResponseItem } from "./response-item";

export interface ActivityResponseList extends Partial<PaginationProperty> {
  items?: ActivityResponseItem[];
}
