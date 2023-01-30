import { PaginationProperty } from "../../../common";
import { ContactResponseItem } from "./response-item";

export interface ContactResponseList extends Partial<PaginationProperty> {
  items?: ContactResponseItem[];
}
