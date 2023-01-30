import { PaginationProperty } from "../../../common";
import { TenantResponseItem } from "./response-item";

export interface TenantResponseList extends Partial<PaginationProperty> {
  items?: TenantResponseItem[];
}
