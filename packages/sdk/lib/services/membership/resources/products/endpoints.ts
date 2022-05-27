import { parseTemplate } from "../../../../client/url-template";
import { PaginationParams } from "../../../../models";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import {
  ProductInsertItemInterface,
  ProductModifyItemInterface,
  ProductResponseItemInterface,
  ProductResponseListInterface,
} from "./models";

import ProductTierEndpoints from "./resources/tiers/endpoints";

const PATH = {
  base: "membership/products",
  item: "membership/products/{product}",
};

type Expressions = {
  product: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class extends CRUDEndpoints<
  Expressions,
  ProductInsertItemInterface,
  ProductModifyItemInterface,
  ProductResponseItemInterface
> {
  readonly Tiers: ProductTierEndpoints;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.Tiers = new ProductTierEndpoints(this.path.item, client);
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    params?: ListItemsParams
  ): ClientResponse<ProductResponseListInterface> {
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
  ): ClientResponse<ProductResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${this.path.item}/restore`).expand(expression)
    );
  }
}
