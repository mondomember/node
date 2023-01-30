import { PaginationProperty } from "../../../common";
import { DeliveryResponseItem } from "./response-item";

export interface DeliveryResponseList extends Partial<PaginationProperty> {
  items?: DeliveryResponseItem[];
}
