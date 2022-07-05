import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { parseTemplate } from "../../../../client/url-template";

import {
  ContactInsertItemInterface,
  ContactModifyItemInterface,
  ContactResponseItemInterface,
  ContactResponseListInterface,
} from "./models";
import { ContactListItemsParams } from "./interfaces";

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
    params?: ContactListItemsParams
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
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
