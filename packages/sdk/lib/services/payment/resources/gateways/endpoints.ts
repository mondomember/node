import { parseTemplate } from "../../../../client/url-template";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";

import {
  GatewayInsertItemInterface,
  GatewayModifyItemInterface,
  GatewayResponseItemInterface,
  GatewayResponseListInterface,
} from "./models";

import { GatewayListItemsParams } from "./interfaces";

const PATH = {
  base: "payment/gateways",
  item: "payment/gateways/{gateway}",
};

type Expressions = {
  gateway: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  GatewayInsertItemInterface,
  GatewayModifyItemInterface,
  GatewayResponseItemInterface
> {
  constructor(client: ClientInstance) {
    super(PATH, client);
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    params?: GatewayListItemsParams
  ): ClientResponse<GatewayResponseListInterface> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Identify item as default.
   *
   * @param expression
   * @returns
   */
  public defaultItem(
    expression: Expressions
  ): ClientResponse<GatewayResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/default`).expand(expression)
    );
  }

  /**
   * Restore a previously deleted item.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: Expressions
  ): ClientResponse<GatewayResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
