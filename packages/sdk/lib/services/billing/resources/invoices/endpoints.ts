import { parseTemplate } from "../../../../client/url-template";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { ExternalIdEndpoints } from "../../../../shared/external-id/endpoints";

import { InvoiceListItemsParams, InvoiceGetItemParams } from "./interfaces";
import TransactionEndpoints from "./resources/transactions/endpoints";
import { Billing } from "@mondomember/model";

const PATH = {
  base: "billing/invoices",
  item: "billing/invoices/{invoice}",
};

type Expressions = {
  invoice: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  Billing.InvoiceInsertItem,
  Billing.InvoiceModifyItem,
  Billing.InvoiceResponseItem,
  InvoiceGetItemParams
> {
  readonly External: ExternalIdEndpoints<
    Billing.InvoiceResponseItem,
    "invoice"
  >;
  readonly Transactions: TransactionEndpoints;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.External = new ExternalIdEndpoints(this.path.base, "invoice", client);
    this.Transactions = new TransactionEndpoints(PATH.item, client);
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    params?: InvoiceListItemsParams
  ): ClientResponse<Billing.InvoiceResponseList> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Submit a payment for an item
   *
   * @param expression
   * @returns
   */
  public payItem(
    expression: Expressions,
    payload: Billing.InvoicePayItem
  ): ClientResponse<Billing.InvoiceResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/pay`).expand(expression),
      payload
    );
  }

  /**
   * Submit a 'tokenized' payment for an item
   *
   * @param expression
   * @returns
   */
  public chargeItem(
    expression: Expressions,
    payload: Billing.InvoiceChargeItem
  ): ClientResponse<Billing.InvoiceResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/charge`).expand(expression),
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
    payload: Billing.InvoiceTransactionInsertItem
  ): ClientResponse<Billing.InvoiceResponseItem> {
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
  ): ClientResponse<Billing.InvoiceResponseItem> {
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
  ): ClientResponse<Billing.InvoiceResponseItem> {
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
  ): ClientResponse<Billing.InvoiceResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
