import { PaginationProperty } from "../../../common";

import { UserResponseItem } from "./response-item";

export interface UserResponseList extends Partial<PaginationProperty> {
  items?: UserResponseItem[];
}
