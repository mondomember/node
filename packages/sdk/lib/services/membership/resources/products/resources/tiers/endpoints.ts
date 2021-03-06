import { parseTemplate } from "../../../../../../client/url-template";
import {
  ClientInstance,
  ClientResponse,
} from "../../../../../../client/interfaces";
import { NestedCRUDEndpoints } from "../../../../../../client/endpoints";
import { buildResourcePath } from "../../../../../../client/utilities";
import {
  ProductTierInsertItemInterface,
  ProductTierModifyItemInterface,
  ProductTierResponseItemInterface,
  ProductTierResponseListInterface,
} from "./models";
import { ProductTierListItemsParams } from "./interfaces";

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
    expression: Expressions,
    params?: ProductTierListItemsParams
  ): ClientResponse<ProductTierResponseListInterface> {
    return this.client.get(parseTemplate(this.path.base).expand(expression), {
      params,
    });
  }
}
