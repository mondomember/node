import { parseTemplate } from "../../../../client/url-template";
import { PaginationParams } from "../../../../models";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { Webhook } from "@mondomember/model";

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
  Webhook.SubscriptionInsertItem,
  Webhook.SubscriptionModifyItem,
  Webhook.SubscriptionResponseItem
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
  ): ClientResponse<Webhook.SubscriptionResponseList> {
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
  ): ClientResponse<Webhook.SubscriptionResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
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
  ): ClientResponse<Webhook.SubscriptionResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/enable`).expand(expression)
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
  ): ClientResponse<Webhook.SubscriptionResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/disable`).expand(expression)
    );
  }
}
