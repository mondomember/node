import { parseTemplate } from "../../../../client/url-template";
import { PaginationParams } from "../../../../models";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import {
  CompanyContactUpsertItemInterface,
  CompanyContactResponseItemInterface,
  CompanyContactResponseListInterface,
} from "./models";

type ContactExpressions = {
  contact: string;
};

type CompanyExpressions = {
  company: string;
};

type Path = {
  base: string;
  item: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class<
  BaseExpressions extends ContactExpressions | CompanyExpressions,
  ItemExpressions extends ContactExpressions | CompanyExpressions
> {
  constructor(readonly path: Path, readonly client: ClientInstance) {}

  public listItems(
    expression: BaseExpressions,
    params?: ListItemsParams
  ): ClientResponse<CompanyContactResponseListInterface> {
    return this.client.get(
      parseTemplate(`${this.path.base}`).expand(expression),
      { params }
    );
  }

  /**
   * Get an item.
   *
   * @param expression
   * @returns
   */
  public getItem(
    expression: BaseExpressions & ItemExpressions
  ): ClientResponse<CompanyContactResponseItemInterface> {
    return this.client.get(parseTemplate(this.path.item).expand(expression));
  }

  /**
   * Insert/Update an item.
   *
   * @param expression
   * @param payload
   * @returns
   */
  public upsertItem(
    expression: BaseExpressions & ItemExpressions,
    payload: CompanyContactUpsertItemInterface
  ): ClientResponse<CompanyContactResponseItemInterface> {
    return this.client.put(
      parseTemplate(this.path.item).expand(expression),
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
    expression: BaseExpressions & ItemExpressions
  ): ClientResponse<CompanyContactResponseItemInterface> {
    return this.client.delete(parseTemplate(this.path.item).expand(expression));
  }

  /**
   * Restore a previously deleted company contact association.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: BaseExpressions & ItemExpressions
  ): ClientResponse<CompanyContactResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${this.path.item}/restore`).expand(expression)
    );
  }
}
