import { parseTemplate } from "../../../../../../client/url-template";
import {
  ClientInstance,
  ClientResponse,
} from "../../../../../../client/interfaces";
import { NestedCRUDEndpoints } from "../../../../../../client/endpoints";
import { buildResourcePath } from "../../../../../../client/utilities";
import { ProductTierListItemsParams } from "./interfaces";
import ProductTierPriceEndpoints from "./resources/prices/endpoints";
import { Membership } from "@mondomember/model";

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
  Membership.ProductTierInsertItem,
  Membership.ProductTierModifyItem,
  Membership.ProductTierResponseItem
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
  ): ClientResponse<Membership.ProductTierResponseList> {
    return this.client.get(parseTemplate(this.path.base).expand(expression), {
      params,
    });
  }
}
