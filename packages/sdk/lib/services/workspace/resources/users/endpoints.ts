import { parseTemplate } from "../../../../client/url-template";
import { PaginationParams } from "../../../../models";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";

import { Workspace } from "@mondomember/model";

const PATH = {
  base: "workspace/users",
  item: "workspace/users/{user}",
};

type Expressions = {
  user: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class extends CRUDEndpoints<
  Expressions,
  Workspace.UserInsertItem,
  Workspace.UserModifyItem,
  Workspace.UserResponseItem
> {
  constructor(client: ClientInstance) {
    super(PATH, client);
  }

  /**
   * List items
   */
  public listItems(
    params?: ListItemsParams
  ): ClientResponse<Workspace.UserResponseList> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Invite an item (which triggers notification to user).
   *
   * @param expression
   * @returns
   */
  public inviteItem(
    payload: Workspace.UserInsertItem
  ): ClientResponse<Workspace.UserResponseItem> {
    return this.client.post(`${PATH.base}/invite`, payload);
  }

  /**
   * Restore a previously deleted item.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: Expressions
  ): ClientResponse<Workspace.UserResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
