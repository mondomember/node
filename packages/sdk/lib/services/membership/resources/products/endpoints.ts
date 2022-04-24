import * as template from "url-template";

import {
  ClientInstance,
  ClientResponse,
  CRUDEndpoints,
} from "../../../../client";

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
  public listItems(): ClientResponse<ProductResponseListInterface> {
    return this.client.get(this.path.base);
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
      template.parse(`${this.path.item}/restore`).expand(expression)
    );
  }
}
