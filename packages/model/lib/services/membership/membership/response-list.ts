import { PaginationProperty } from "../../../common";
import {
  MembershipResponseItem,
  DelegatedMembershipResponseItem,
} from "./response-item";

type ResponseItem = MembershipResponseItem | DelegatedMembershipResponseItem;

export interface MembershipResponseList extends Partial<PaginationProperty> {
  items?: ResponseItem[];
}
