import { PaginationParams } from "../../../../models";
import { parseTemplate } from "../../../../client/url-template";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import {
  CompanyInsertItemInterface,
  CompanyModifyItemInterface,
  CompanyResponseItemInterface,
  CompanyResponseListInterface,
} from "./models";

import CompanyContactEndpoints from "../company-contacts/endpoints";

const PATH = {
  base: "crm/companies",
  item: "crm/companies/{company}",
};

type Expressions = {
  company: string;
};

type ContactExpressions = Expressions & {
  contact: string;
};

export type CompanyListItemsParams = {
  pagination: PaginationParams;
};

export default class extends CRUDEndpoints<
  Expressions,
  CompanyInsertItemInterface,
  CompanyModifyItemInterface,
  CompanyResponseItemInterface
> {
  readonly Contacts: CompanyContactEndpoints<Expressions, ContactExpressions>;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.Contacts = new CompanyContactEndpoints(
      {
        base: `${PATH.item}/contacts`,
        item: `${PATH.item}/contacts/{contact}`,
      },
      client
    );
  }

  public listItems(
    params?: CompanyListItemsParams
  ): ClientResponse<CompanyResponseListInterface> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Restore a previously deleted company item.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: Expressions
  ): ClientResponse<CompanyResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
