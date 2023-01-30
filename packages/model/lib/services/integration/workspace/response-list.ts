import { PaginationProperty } from "../../../common";
import { WorkspaceTokenResponseItem } from "./response-item";

export interface WorkspaceTokenResponseList
  extends Partial<PaginationProperty> {
  items?: WorkspaceTokenResponseItem[];
}
