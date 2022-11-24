import { parseTemplate } from "../../../../client/url-template";
import { PaginationParams } from "../../../../models";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import {
  IdentityWorkspaceResponseItemInterface,
  IdentityWorkspaceResponseListInterface,
} from ".";
import {
  TenantInsertItemInterface,
  TenantModifyItemInterface,
} from "../../../workspace/models";

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
  ): ClientResponse<IdentityWorkspaceResponseListInterface> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Create a new item.
   *
   * @param payload
   * @returns
   */
  public createItem(
    payload: TenantInsertItemInterface
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
    payload: TenantModifyItemInterface
  ): ClientResponse<IdentityWorkspaceResponseItemInterface> {
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
  ): ClientResponse<IdentityWorkspaceResponseItemInterface> {
    return this.client.delete(parseTemplate(PATH.item).expand(expression));
  }
}
