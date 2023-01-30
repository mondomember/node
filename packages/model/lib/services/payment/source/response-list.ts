import { PaginationProperty } from "../../../common";
import { SourceResponseItem } from "./response-item";

export interface SourceResponseList extends Partial<PaginationProperty> {
  items?: SourceResponseItem[];
}
