import { PaginationProperty } from "../../../common";
import { ContractResponseItem } from "./response-item";

export interface ContractResponseList extends Partial<PaginationProperty> {
  items?: ContractResponseItem[];
}
