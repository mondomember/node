import { PaginationProperty } from "../../../common";
import { AppResponseItem } from "./response-item";

export interface AppResponseList extends Partial<PaginationProperty> {
  items?: AppResponseItem[];
}
