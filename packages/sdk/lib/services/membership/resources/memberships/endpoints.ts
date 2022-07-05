import { parseTemplate } from "../../../../client/url-template";
import { PaginationParams } from "../../../../models";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
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

export type MembershipListItemsParams = {
  pagination: PaginationParams;
  filter?: MembershipFilter;
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
    params?: MembershipListItemsParams
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
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
