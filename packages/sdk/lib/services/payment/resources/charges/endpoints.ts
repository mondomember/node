import * as template from "url-template";

import {
  ClientInstance,
  ClientResponse,
  CRUDEndpoints,
} from "../../../../client";

import {
  ChargeInsertItemInterface,
  ChargeModifyItemInterface,
  ChargeResponseItemInterface,
  ChargeResponseListInterface,
} from "./models";

import { ChargeFilter } from "./interfaces";

import Refunds from "./resources/refunds/endpoints";

const PATH = {
  base: "payment/charges",
  item: "payment/charges/{charge}",
};

type Expressions = {
  charge: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  ChargeInsertItemInterface,
  ChargeModifyItemInterface,
  ChargeResponseItemInterface
> {
  readonly Refunds: Refunds;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.Refunds = new Refunds(PATH.item, client);
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    filter?: ChargeFilter
  ): ClientResponse<ChargeResponseListInterface> {
    const params = !!filter ? { filter } : undefined;

    return this.client.get(PATH.base, { params });
  }

  /**
   * Restore a previously deleted item.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: Expressions
  ): ClientResponse<ChargeResponseItemInterface> {
    return this.client.post(
      template.parse(`${PATH.item}/restore`).expand(expression)
    );
  }
}
