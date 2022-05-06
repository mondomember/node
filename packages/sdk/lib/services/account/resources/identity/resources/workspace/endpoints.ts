import { parseTemplate } from "../../../../../../client/url-template";
import {
  ClientInstance,
  ClientResponse,
} from "../../../../../../client/interfaces";

import {
  IdentityWorkspaceResponseItemInterface,
  IdentityWorkspaceResponseListInterface,
} from ".";
import {
  WorkspaceTenantInsertItemInterface,
  WorkspaceTenantModifyItemInterface,
} from "../../../workspace/models";

const PATH = {
  base: "account/identity/workspaces",
  item: "account/identity/workspaces/{workspace}",
};

type Expressions = {
  workspace: string;
};

export default class {
  constructor(readonly client: ClientInstance) {}

  /**
   * List items
   *
   * @returns
   */
  public listItems(): ClientResponse<IdentityWorkspaceResponseListInterface> {
    return this.client.get(PATH.base);
  }

  /**
   * Create a new item.
   *
   * @param payload
   * @returns
   */
  public createItem(
    payload: WorkspaceTenantInsertItemInterface
  ): ClientResponse<IdentityWorkspaceResponseItemInterface> {
    return this.client.post(PATH.base, payload);
  }

  /**
   * Update an item.
   *
   * @param payload
   * @returns
   */
  public updateItem(
    expression: Expressions,
    payload: WorkspaceTenantModifyItemInterface
  ): ClientResponse<IdentityWorkspaceResponseItemInterface> {
    return this.client.put(
      parseTemplate(PATH.item).expand(expression),
      payload
    );
  }

  /**
   * Switch to item.
   *
   * @param expression
   * @returns
   */
  public switchToItem(
    expression: Expressions
  ): ClientResponse<IdentityWorkspaceResponseItemInterface> {
    return this.client.post(parseTemplate(PATH.item).expand(expression));
  }

  /**
   * Leave an item.
   *
   * @param expression
   * @returns
   */
  public leaveItem(
    expression: Expressions
  ): ClientResponse<IdentityWorkspaceResponseItemInterface> {
    return this.client.delete(parseTemplate(PATH.item).expand(expression));
  }
}
