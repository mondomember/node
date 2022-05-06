import { parseTemplate } from "../../../../../../client/url-template";
import {
  ClientInstance,
  ClientResponse,
} from "../../../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../../../client/endpoints";

import {
  WorkspaceUserInsertItemInterface,
  WorkspaceUserModifyItemInterface,
  WorkspaceUserResponseItemInterface,
  WorkspaceUserResponseListInterface,
} from "./models";

import { WorkspaceUserAuthenticationResponseListInterface } from "./resources/authentication/models";

const PATH = {
  base: "account/workspace/users",
  item: "account/workspace/users/{user}",
};

type Expressions = {
  user: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  WorkspaceUserInsertItemInterface,
  WorkspaceUserModifyItemInterface,
  WorkspaceUserResponseItemInterface
> {
  constructor(client: ClientInstance) {
    super(PATH, client);
  }

  /**
   * List items
   */
  public listItems(): ClientResponse<WorkspaceUserResponseListInterface> {
    return this.client.get(PATH.base);
  }

  /**
   * Invite an item (which triggers notification to user).
   *
   * @param expression
   * @returns
   */
  public inviteItem(
    payload: WorkspaceUserInsertItemInterface
  ): ClientResponse<WorkspaceUserResponseItemInterface> {
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
  ): ClientResponse<WorkspaceUserResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }

  /**
   * List authentication items
   *
   * @param expression
   * @returns
   */
  public listAuthenticationItems(
    expression: Expressions
  ): ClientResponse<WorkspaceUserAuthenticationResponseListInterface> {
    return this.client.get(
      parseTemplate(`${PATH.item}/authentications`).expand(expression)
    );
  }
}
