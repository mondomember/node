import { parseTemplate } from "../../../../client/url-template";
import { PaginationParams } from "../../../../models";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";

import {
  UserInsertItemInterface,
  UserModifyItemInterface,
  UserResponseItemInterface,
  UserResponseListInterface,
} from "./models";

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
  UserInsertItemInterface,
  UserModifyItemInterface,
  UserResponseItemInterface
> {
  constructor(client: ClientInstance) {
    super(PATH, client);
  }

  /**
   * List items
   */
  public listItems(
    params?: ListItemsParams
  ): ClientResponse<UserResponseListInterface> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Invite an item (which triggers notification to user).
   *
   * @param expression
   * @returns
   */
  public inviteItem(
    payload: UserInsertItemInterface
  ): ClientResponse<UserResponseItemInterface> {
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
  ): ClientResponse<UserResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
