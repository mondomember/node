import { parseTemplate } from "../../../../client/url-template";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { ExternalIdEndpoints } from "../../../../shared/external-id";

import {
  MembershipInsertItemInterface,
  MembershipModifyItemInterface,
  MembershipResponseItemInterface,
  MembershipResponseListInterface,
} from "./models";

import { MembershipListItemsParams } from "./interfaces";

const PATH = {
  base: "membership/memberships",
  item: "membership/memberships/{membership}",
};

type Expressions = {
  membership: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  MembershipInsertItemInterface,
  MembershipModifyItemInterface,
  MembershipResponseItemInterface
> {
  readonly External: ExternalIdEndpoints<
    MembershipResponseItemInterface,
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
