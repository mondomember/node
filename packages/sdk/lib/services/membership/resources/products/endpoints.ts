import { parseTemplate } from "../../../../client/url-template";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { ExternalIdEndpoints } from "../../../../shared/external-id/endpoints";

import { ProductListItemsParams } from "./interfaces";
import ProductTierEndpoints from "./resources/tiers/endpoints";
import { Membership } from "@mondomember/model";

const PATH = {
  base: "membership/products",
  item: "membership/products/{product}",
};

type Expressions = {
  product: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  Membership.ProductInsertItem,
  Membership.ProductModifyItem,
  Membership.ProductResponseItem
> {
  readonly External: ExternalIdEndpoints<
    Membership.ProductResponseItem,
    "product"
  >;

  readonly Tiers: ProductTierEndpoints;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.External = new ExternalIdEndpoints(this.path.base, "product", client);
    this.Tiers = new ProductTierEndpoints(this.path.item, client);
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    params?: ProductListItemsParams
  ): ClientResponse<Membership.ProductResponseList> {
    return this.client.get(this.path.base, { params });
  }

  /**
   * Restore a previously deleted item.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: Expressions
  ): ClientResponse<Membership.ProductResponseItem> {
    return this.client.post(
      parseTemplate(`${this.path.item}/restore`).expand(expression)
    );
  }
}
