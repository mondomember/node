import { parseTemplate } from "../../../../client/url-template";

import { PaginationParams } from "../../../../models";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";

import {
  WorkspaceTokenInsertItemInterface,
  WorkspaceTokenModifyItemInterface,
  WorkspaceTokenResponseItemInterface,
  WorkspaceTokenResponseListInterface,
} from "./models";

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
  WorkspaceTokenInsertItemInterface,
  WorkspaceTokenModifyItemInterface,
  WorkspaceTokenResponseItemInterface
> {
  constructor(client: ClientInstance) {
    super(PATH, client);
  }

  public listItems(
    params?: ListItemsParams
  ): ClientResponse<WorkspaceTokenResponseListInterface> {
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
  ): ClientResponse<WorkspaceTokenResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
