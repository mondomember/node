import { parseTemplate } from "../../../../client/url-template";
import { PaginationParams } from "../../../../models";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import {
  SourceInsertItemInterface,
  SourceModifyItemInterface,
  SourceResponseItemInterface,
  SourceResponseListInterface,
} from "./models";

import Session from "./session/endpoints";

import { SourceFilter } from "./interfaces";

const PATH = {
  base: "payment/sources",
  item: "payment/sources/{source}",
};

type Expressions = {
  source: string;
};

type ListItemsParams = {
  pagination?: PaginationParams;
  filter?: SourceFilter;
};

export default class extends CRUDEndpoints<
  Expressions,
  SourceInsertItemInterface,
  SourceModifyItemInterface,
  SourceResponseItemInterface
> {
  readonly Session: Session;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.Session = new Session(this.client);
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    params?: ListItemsParams
  ): ClientResponse<SourceResponseListInterface> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Identify item as default.
   *
   * @param expression
   * @returns
   */
  public defaultItem(
    expression: Expressions
  ): ClientResponse<SourceResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/default`).expand(expression)
    );
  }

  /**
   * Restore a previously deleted item.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: Expressions
  ): ClientResponse<SourceResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
