import * as template from "url-template";

import {
  ClientInstance,
  ClientResponse,
  CRUDEndpoints,
} from "../../../../../../client";

import {
  NotificationInsertItemInterface,
  NotificationModifyItemInterface,
  NotificationResponseItemInterface,
  NotificationResponseListInterface,
} from "./models";

const PATH = {
  base: "account/workspace/notifications",
  item: "account/workspace/notifications/{notification}",
};

type Expressions = {
  notification: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  NotificationInsertItemInterface,
  NotificationModifyItemInterface,
  NotificationResponseItemInterface
> {
  constructor(client: ClientInstance) {
    super(PATH, client);
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(): ClientResponse<NotificationResponseListInterface> {
    return this.client.get(PATH.base);
  }

  /**
   * Restore a previously deleted item.
   *
   * @param expression
   * @returnss
   */
  public restoreItem(
    expression: Expressions
  ): ClientResponse<NotificationResponseItemInterface> {
    return this.client.post(
      template.parse(`${PATH.item}/restore`).expand(expression)
    );
  }
}
