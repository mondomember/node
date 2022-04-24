import * as template from "url-template";

import {
  buildResourcePath,
  ClientInstance,
  ClientResponse,
  NestedCRUDEndpoints,
} from "../../../../../../../../client";

import {
  ProductTierPriceInsertItemInterface,
  ProductTierPriceModifyItemInterface,
  ProductTierPriceResponseItemInterface,
  ProductTierPriceResponseListInterface,
} from "./models";

const PATH = {
  base: "prices",
  item: "prices/{price}",
};

type Expressions = {
  product: string;
  tier: string;
};

type PriceExpressions = Expressions & {
  price: number;
};

export default class extends NestedCRUDEndpoints<
  Expressions,
  PriceExpressions,
  ProductTierPriceInsertItemInterface,
  ProductTierPriceModifyItemInterface,
  ProductTierPriceResponseItemInterface
> {
  constructor(path: string, client: ClientInstance) {
    super(
      {
        base: buildResourcePath([path, PATH.base]),
        item: buildResourcePath([path, PATH.item]),
      },
      client
    );
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    expression: Expressions
  ): ClientResponse<ProductTierPriceResponseListInterface> {
    return this.client.get(template.parse(this.path.base).expand(expression));
  }

  /**
   * List items
   *
   * @returns
   */
  public defaultItem(
    expression: PriceExpressions
  ): ClientResponse<ProductTierPriceResponseItemInterface> {
    return this.client.post(
      `${template.parse(this.path.item).expand(expression)}/default`
    );
  }
}
