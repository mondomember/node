import { PaginationProperty } from "../../../common";
import { GatewayResponseItem } from "./response-item";

export interface GatewayResponseList extends Partial<PaginationProperty> {
  items?: GatewayResponseItem[];
}
