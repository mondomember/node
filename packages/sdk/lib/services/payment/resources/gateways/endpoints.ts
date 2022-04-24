import * as template from "url-template";

import {
  ClientInstance,
  ClientResponse,
  CRUDEndpoints,
} from "../../../../client";

import {
  GatewayInsertItemInterface,
  GatewayModifyItemInterface,
  GatewayResponseItemInterface,
  GatewayResponseListInterface,
} from "./models";

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
  public listItems(): ClientResponse<GatewayResponseListInterface> {
    return this.client.get(PATH.base);
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
      template.parse(`${PATH.item}/default`).expand(expression)
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
      template.parse(`${PATH.item}/restore`).expand(expression)
    );
  }
}
