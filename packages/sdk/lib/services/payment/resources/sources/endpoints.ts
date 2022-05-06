import { parseTemplate } from "../../../../client/url-template";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import {
  SourceInsertItemInterface,
  SourceModifyItemInterface,
  SourceResponseItemInterface,
  SourceResponseListInterface,
} from "./models";

import { SourceFilter } from "./interfaces";

const PATH = {
  base: "payment/sources",
  item: "payment/sources/{source}",
};

type Expressions = {
  source: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  SourceInsertItemInterface,
  SourceModifyItemInterface,
  SourceResponseItemInterface
> {
  constructor(client: ClientInstance) {
    super(PATH, client);
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    filter?: SourceFilter
  ): ClientResponse<SourceResponseListInterface> {
    const params = !!filter ? { filter } : undefined;

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
