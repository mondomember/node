import { parseTemplate } from "../../../../client/url-template";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";

import { Payment } from "@mondomember/model";

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
  Payment.GatewayInsertItem,
  Payment.GatewayModifyItem,
  Payment.GatewayResponseItem
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
  ): ClientResponse<Payment.GatewayResponseList> {
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
  ): ClientResponse<Payment.GatewayResponseItem> {
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
  ): ClientResponse<Payment.GatewayResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
