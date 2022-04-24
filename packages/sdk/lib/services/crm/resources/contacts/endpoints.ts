import * as template from "url-template";

import { PaginationParams } from "../../../../models";
import {
  ClientInstance,
  ClientResponse,
  CRUDEndpoints,
} from "../../../../client";

import {
  ContactInsertItemInterface,
  ContactModifyItemInterface,
  ContactResponseItemInterface,
  ContactResponseListInterface,
} from "./models";

import ContactContactEndpoints from "../company-contacts/endpoints";

const PATH = {
  base: "crm/contacts",
  item: "crm/contacts/{contact}",
};

type Expressions = {
  contact: string;
};

type CompanyExpressions = Expressions & {
  company: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class extends CRUDEndpoints<
  Expressions,
  ContactInsertItemInterface,
  ContactModifyItemInterface,
  ContactResponseItemInterface
> {
  readonly Companies: ContactContactEndpoints<Expressions, CompanyExpressions>;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.Companies = new ContactContactEndpoints(
      {
        base: `${PATH.item}/companies`,
        item: `${PATH.item}/companies/{company}`,
      },
      client
    );
  }

  public listItems(
    params?: ListItemsParams
  ): ClientResponse<ContactResponseListInterface> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Restore a previously deleted contact item.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: Expressions
  ): ClientResponse<ContactResponseItemInterface> {
    return this.client.post(
      template.parse(`${PATH.item}/restore`).expand(expression)
    );
  }
}
