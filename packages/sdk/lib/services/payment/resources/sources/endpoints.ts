import { parseTemplate } from "../../../../client/url-template";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { SourceListItemsParams } from "./interfaces";

import { Payment } from "@mondomember/model";
import Session from "./session/endpoints";

const PATH = {
  base: "payment/sources",
  item: "payment/sources/{source}",
};

type Expressions = {
  source: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  Payment.SourceInsertItem,
  Payment.SourceModifyItem,
  Payment.SourceResponseItem
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
    params?: SourceListItemsParams
  ): ClientResponse<Payment.SourceResponseList> {
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
  ): ClientResponse<Payment.SourceResponseItem> {
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
  ): ClientResponse<Payment.SourceResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
