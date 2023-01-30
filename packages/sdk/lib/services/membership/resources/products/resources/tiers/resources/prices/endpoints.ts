import { parseTemplate } from "../../../../../../../../client/url-template";

import {
  ClientInstance,
  ClientResponse,
} from "../../../../../../../../client/interfaces";
import { NestedCRUDEndpoints } from "../../../../../../../../client/endpoints";
import { buildResourcePath } from "../../../../../../../../client/utilities";

import { ProductTierPriceListItemsParams } from "./interfaces";
import { Membership } from "@mondomember/model";

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
  Membership.ProductTierPriceInsertItem,
  Membership.ProductTierPriceModifyItem,
  Membership.ProductTierPriceResponseItem
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
    expression: Expressions,
    params?: ProductTierPriceListItemsParams
  ): ClientResponse<Membership.ProductTierPriceResponseList> {
    return this.client.get(parseTemplate(this.path.base).expand(expression), {
      params,
    });
  }

  /**
   * List items
   *
   * @returns
   */
  public defaultItem(
    expression: PriceExpressions
  ): ClientResponse<Membership.ProductTierPriceResponseItem> {
    return this.client.post(
      `${parseTemplate(this.path.item).expand(expression)}/default`
    );
  }
}
