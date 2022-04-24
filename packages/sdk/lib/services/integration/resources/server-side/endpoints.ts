import * as template from "url-template";

import { PaginationParams } from "../../../../models";
import {
  ClientInstance,
  ClientResponse,
  CRUDEndpoints,
} from "../../../../client";

import {
  ServerSideTokenInsertItemInterface,
  ServerSideTokenModifyItemInterface,
  ServerSideTokenResponseItemInterface,
  ServerSideTokenResponseListInterface,
} from "./models";

const PATH = {
  base: "integrations/server-side",
  item: "integrations/server-side/{jwt}",
};

type Expressions = {
  jwt: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class extends CRUDEndpoints<
  Expressions,
  ServerSideTokenInsertItemInterface,
  ServerSideTokenModifyItemInterface,
  ServerSideTokenResponseItemInterface
> {
  constructor(client: ClientInstance) {
    super(PATH, client);
  }

  public listItems(
    params?: ListItemsParams
  ): ClientResponse<ServerSideTokenResponseListInterface> {
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
  ): ClientResponse<ServerSideTokenResponseItemInterface> {
    return this.client.post(
      template.parse(`${PATH.item}/restore`).expand(expression)
    );
  }
}
