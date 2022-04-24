import * as template from "url-template";

import {
  buildResourcePath,
  ClientInstance,
  ClientResponse,
  NestedCRUDEndpoints,
} from "../../../../../../client";

import {
  ProductTierInsertItemInterface,
  ProductTierModifyItemInterface,
  ProductTierResponseItemInterface,
  ProductTierResponseListInterface,
} from "./models";

import ProductTierPriceEndpoints from "./resources/prices/endpoints";

const PATH = {
  base: "tiers",
  item: "tiers/{tier}",
};

type Expressions = {
  product: string;
};

type TierExpressions = Expressions & {
  tier: string;
};

export default class extends NestedCRUDEndpoints<
  Expressions,
  TierExpressions,
  ProductTierInsertItemInterface,
  ProductTierModifyItemInterface,
  ProductTierResponseItemInterface
> {
  readonly Prices: ProductTierPriceEndpoints;

  constructor(path: string, client: ClientInstance) {
    super(
      {
        base: buildResourcePath([path, PATH.base]),
        item: buildResourcePath([path, PATH.item]),
      },
      client
    );

    this.Prices = new ProductTierPriceEndpoints(this.path.item, client);
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    expression: Expressions
  ): ClientResponse<ProductTierResponseListInterface> {
    return this.client.get(template.parse(this.path.base).expand(expression));
  }
}
