import * as template from "url-template";

import {
  ClientInstance,
  ClientResponse,
  CRUDEndpoints,
} from "../../../../../../client";

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
      template.parse(`${PATH.item}/restore`).expand(expression)
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
      template.parse(`${PATH.item}/authentications`).expand(expression)
    );
  }
}
