import { PaginationProperty } from "../../../common";
import { SubscriptionResponseItem } from "./response-item";

export interface SubscriptionResponseList extends Partial<PaginationProperty> {
  items?: SubscriptionResponseItem[];
}
