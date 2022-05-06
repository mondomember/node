import { parseTemplate } from "../../../../../../client/url-template";
import { PaginationParams } from "../../../../../../models";
import {
  ClientInstance,
  ClientResponse,
} from "../../../../../../client/interfaces";
import { buildResourcePath } from "../../../../../../client/utilities";

import {
  InvoiceTransactionInsertItemInterface,
  InvoiceTransactionResponseItemInterface,
  InvoiceTransactionResponseListInterface,
} from "./models";

const PATH = {
  base: "transactions",
  item: "transactions/{transaction}",
};

type Expressions = {
  invoice: string;
};

type TransactionExpressions = Expressions & {
  transaction: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class {
  readonly path: {
    base: string;
    item: string;
  };

  constructor(path: string, readonly client: ClientInstance) {
    this.path = {
      base: buildResourcePath([path, PATH.base]),
      item: buildResourcePath([path, PATH.item]),
    };
  }

  /**
   * Create a new item.
   *
   * @returns
   */
  public createItem(
    expression: Expressions,
    payload: InvoiceTransactionInsertItemInterface
  ): ClientResponse<InvoiceTransactionResponseItemInterface> {
    return this.client.post(
      parseTemplate(this.path.base).expand(expression),
      payload
    );
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    expression: Expressions,
    params?: ListItemsParams
  ): ClientResponse<InvoiceTransactionResponseListInterface> {
    return this.client.get(parseTemplate(this.path.base).expand(expression), {
      params,
    });
  }

  /**
   * Get an item.
   *
   * @param expression
   * @returns
   */
  public getItem(
    expression: TransactionExpressions
  ): ClientResponse<InvoiceTransactionResponseItemInterface> {
    return this.client.get(parseTemplate(this.path.item).expand(expression));
  }
}
