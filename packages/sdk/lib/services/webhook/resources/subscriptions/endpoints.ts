import * as template from "url-template";
import { PaginationParams } from "../../../../models";
import {
  ClientInstance,
  ClientResponse,
  CRUDEndpoints,
} from "../../../../client";

import {
  SubscriptionInsertItemInterface,
  SubscriptionModifyItemInterface,
  SubscriptionResponseItemInterface,
  SubscriptionResponseListInterface,
} from "./models";

import Deliveries from "./resources/delivery/endpoints";

const PATH = {
  base: "webhooks",
  item: "webhooks/{subscription}",
};

type Expressions = {
  subscription: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class extends CRUDEndpoints<
  Expressions,
  SubscriptionInsertItemInterface,
  SubscriptionModifyItemInterface,
  SubscriptionResponseItemInterface
> {
  readonly Deliveries: Deliveries;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.Deliveries = new Deliveries(PATH.item, client);
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    params?: ListItemsParams
  ): ClientResponse<SubscriptionResponseListInterface> {
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
  ): ClientResponse<SubscriptionResponseItemInterface> {
    return this.client.post(
      template.parse(`${PATH.item}/restore`).expand(expression)
    );
  }

  /**
   * Enable an item.
   *
   * @param expression
   * @returns
   */
  public enableItem(
    expression: Expressions
  ): ClientResponse<SubscriptionResponseItemInterface> {
    return this.client.post(
      template.parse(`${PATH.item}/enable`).expand(expression)
    );
  }

  /**
   * Disable an item.
   *
   * @param expression
   * @returns
   */
  public disableItem(
    expression: Expressions
  ): ClientResponse<SubscriptionResponseItemInterface> {
    return this.client.post(
      template.parse(`${PATH.item}/disable`).expand(expression)
    );
  }
}
