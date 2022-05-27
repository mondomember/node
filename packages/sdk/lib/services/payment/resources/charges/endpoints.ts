import { parseTemplate } from "../../../../client/url-template";
import { PaginationParams } from "../../../../models";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
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

type ListItemsParams = {
  pagination: PaginationParams;
  filter?: ChargeFilter;
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
    params?: ListItemsParams
  ): ClientResponse<ChargeResponseListInterface> {
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
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
