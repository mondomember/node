import { parseTemplate } from "../../../../client/url-template";
import { PaginationParams } from "../../../../models";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";

import { Workspace } from "@mondomember/model";

const PATH = {
  base: "workspace/notifications",
  item: "workspace/notifications/{notification}",
};

type Expressions = {
  notification: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class extends CRUDEndpoints<
  Expressions,
  Workspace.NotificationInsertItem,
  Workspace.NotificationModifyItem,
  Workspace.NotificationResponseItem
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
    params?: ListItemsParams
  ): ClientResponse<Workspace.NotificationResponseList> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Restore a previously deleted item.
   *
   * @param expression
   * @returnss
   */
  public restoreItem(
    expression: Expressions
  ): ClientResponse<Workspace.NotificationResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
