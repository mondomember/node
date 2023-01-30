import { parseTemplate } from "../../../../client/url-template";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { ExternalIdEndpoints } from "../../../../shared/external-id/endpoints";

import { MembershipListItemsParams } from "./interfaces";
import { Membership } from "@mondomember/model";

const PATH = {
  base: "membership/memberships",
  item: "membership/memberships/{membership}",
};

type Expressions = {
  membership: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  Membership.MembershipInsertItem,
  Membership.MembershipModifyItem,
  Membership.MembershipResponseItem
> {
  readonly External: ExternalIdEndpoints<
    Membership.MembershipResponseItem,
    "membership"
  >;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.External = new ExternalIdEndpoints(
      this.path.base,
      "membership",
      client
    );
  }

  /**
   * List membership items
   *
   * @returns
   */
  public listItems(
    params?: MembershipListItemsParams
  ): ClientResponse<Membership.MembershipResponseList> {
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
  ): ClientResponse<Membership.MembershipResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
