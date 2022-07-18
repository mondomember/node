import { parseTemplate } from "../../../../client/url-template";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import {
  CompanyContactUpsertItemInterface,
  CompanyContactResponseItemInterface,
  CompanyContactResponseListInterface,
} from "./models";

import { CompanyContactListItemsParams } from "./interfaces";

const PATH = {
  base: "crm/company-contacts",
  item: "crm/company-contacts/{company}/{contact}",
};

type Expressions = {
  contact: string;
  company: string;
};

export default class {
  constructor(readonly client: ClientInstance) {}

  public listItems(
    params?: CompanyContactListItemsParams
  ): ClientResponse<CompanyContactResponseListInterface> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Get an item.
   *
   * @param expression
   * @returns
   */
  public getItem(
    expression: Expressions
  ): ClientResponse<CompanyContactResponseItemInterface> {
    return this.client.get(parseTemplate(PATH.item).expand(expression));
  }

  /**
   * Insert/Update an item.
   *
   * @param expression
   * @param payload
   * @returns
   */
  public upsertItem(
    expression: Expressions,
    payload: CompanyContactUpsertItemInterface
  ): ClientResponse<CompanyContactResponseItemInterface> {
    return this.client.put(
      parseTemplate(PATH.item).expand(expression),
      payload
    );
  }

  /**
   * Delete an item.
   *
   * @param expression
   * @returns
   */
  public deleteItem(
    expression: Expressions
  ): ClientResponse<CompanyContactResponseItemInterface> {
    return this.client.delete(parseTemplate(PATH.item).expand(expression));
  }

  /**
   * Restore a previously deleted company contact association.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: Expressions
  ): ClientResponse<CompanyContactResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
