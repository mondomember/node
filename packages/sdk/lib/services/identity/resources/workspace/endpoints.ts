import { parseTemplate } from "../../../../client/url-template";
import { PaginationParams } from "../../../../models";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import { Workspace, Identity } from "@mondomember/model";

const PATH = {
  base: "/identity/workspaces",
  item: "/identity/workspaces/{workspace}",
};

type Expressions = {
  workspace: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class {
  constructor(readonly client: ClientInstance) {}

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    params?: ListItemsParams
  ): ClientResponse<Identity.IdentityWorkspaceResponseList> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Create a new item.
   *
   * @param payload
   * @returns
   */
  public createItem(
    payload: Workspace.TenantInsertItem
  ): ClientResponse<Identity.IdentityWorkspaceResponseItem> {
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
    payload: Workspace.TenantModifyItem
  ): ClientResponse<Identity.IdentityWorkspaceResponseItem> {
    return this.client.put(
      parseTemplate(PATH.item).expand(expression),
      payload
    );
  }

  /**
   * Leave an item.
   *
   * @param expression
   * @returns
   */
  public leaveItem(
    expression: Expressions
  ): ClientResponse<Identity.IdentityWorkspaceResponseItem> {
    return this.client.delete(parseTemplate(PATH.item).expand(expression));
  }
}
