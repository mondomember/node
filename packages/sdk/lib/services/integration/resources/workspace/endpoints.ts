import { parseTemplate } from "../../../../client/url-template";

import { PaginationParams } from "../../../../models";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";

import { Integration } from "@mondomember/model";

const PATH = {
  base: "integrations/workspace",
  item: "integrations/workspace/{token}",
};

type Expressions = {
  token: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class extends CRUDEndpoints<
  Expressions,
  Integration.WorkspaceTokenInsertItem,
  Integration.WorkspaceTokenModifyItem,
  Integration.WorkspaceTokenResponseItem
> {
  constructor(client: ClientInstance) {
    super(PATH, client);
  }

  public listItems(
    params?: ListItemsParams
  ): ClientResponse<Integration.WorkspaceTokenResponseList> {
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
  ): ClientResponse<Integration.WorkspaceTokenResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
