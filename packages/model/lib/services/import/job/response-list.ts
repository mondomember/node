import { PaginationProperty } from "../../../common";
import { JobResponseItem } from "./response-item";

export interface JobResponseList extends Partial<PaginationProperty> {
  items?: JobResponseItem[];
}
