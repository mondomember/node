import { parseTemplate } from "../../../../client/url-template";
import { PaginationParams } from "../../../../models";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";

import {
  InvoicePayItemInterface,
  InvoiceInsertItemInterface,
  InvoiceModifyItemInterface,
  InvoiceResponseItemInterface,
  InvoiceResponseListInterface,
} from "./models";
import { InvoiceTransactionInsertItemInterface } from "./resources/transactions";

import { InvoiceFilter } from "./interfaces";
import TransactionEndpoints from "./resources/transactions/endpoints";

const PATH = {
  base: "billing/invoices",
  item: "billing/invoices/{invoice}",
};

type Expressions = {
  invoice: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
  filter?: InvoiceFilter;
};

export default class extends CRUDEndpoints<
  Expressions,
  InvoiceInsertItemInterface,
  InvoiceModifyItemInterface,
  InvoiceResponseItemInterface
> {
  readonly Transactions: TransactionEndpoints;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.Transactions = new TransactionEndpoints(PATH.item, client);
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    params?: ListItemsParams
  ): ClientResponse<InvoiceResponseListInterface> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Submit an 'offline' payment for an item
   *
   * @param expression
   * @returns
   */
  public payItem(
    expression: Expressions,
    payload: InvoicePayItemInterface
  ): ClientResponse<InvoiceResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/pay`).expand(expression),
      payload
    );
  }

  /**
   * Adjust payment for an item
   *
   * @param expression
   * @returns
   */
  public adjustItem(
    expression: Expressions,
    payload: InvoiceTransactionInsertItemInterface
  ): ClientResponse<InvoiceResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/adjust`).expand(expression),
      payload
    );
  }

  /**
   * Finalize an item
   *
   * @param expression
   * @returns
   */
  public finalizeItem(
    expression: Expressions
  ): ClientResponse<InvoiceResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/finalize`).expand(expression)
    );
  }

  /**
   * Void an item
   *
   * @param expression
   * @returns
   */
  public voidItem(
    expression: Expressions
  ): ClientResponse<InvoiceResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/void`).expand(expression)
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
  ): ClientResponse<InvoiceResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
