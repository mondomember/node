import * as template from "url-template";
import { PaginationParams } from "../../../../models";

import {
  ClientInstance,
  ClientResponse,
  CRUDEndpoints,
} from "../../../../client";

import {
  MembershipInsertItemInterface,
  MembershipModifyItemInterface,
  MembershipResponseItemInterface,
  MembershipResponseListInterface,
} from "./models";

import { MembershipFilter } from "./interfaces";

const PATH = {
  base: "membership/memberships",
  item: "membership/memberships/{membership}",
};

type Expressions = {
  membership: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
  filter: MembershipFilter;
};

export default class extends CRUDEndpoints<
  Expressions,
  MembershipInsertItemInterface,
  MembershipModifyItemInterface,
  MembershipResponseItemInterface
> {
  constructor(client: ClientInstance) {
    super(PATH, client);
  }

  /**
   * List membership items
   *
   * @returns
   */
  public listItems(
    params?: ListItemsParams
  ): ClientResponse<MembershipResponseListInterface> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Restore a previously deleted item.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: Expressions
  ): ClientResponse<MembershipResponseItemInterface> {
    return this.client.post(
      template.parse(`${PATH.item}/restore`).expand(expression)
    );
  }
}
