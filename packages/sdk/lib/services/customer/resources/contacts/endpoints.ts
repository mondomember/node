import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { ExternalIdEndpoints } from "../../../../shared/external-id/endpoints";
import { parseTemplate } from "../../../../client/url-template";
import { ContactListItemsParams } from "./interfaces";
import { Customer } from "@mondomember/model";

const PATH = {
  base: "crm/contacts",
  item: "crm/contacts/{contact}",
};

type Expressions = {
  contact: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  Customer.ContactInsertItem,
  Customer.ContactModifyItem,
  Customer.ContactResponseItem
> {
  readonly External: ExternalIdEndpoints<
    Customer.ContactResponseItem,
    "contact"
  >;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.External = new ExternalIdEndpoints(this.path.base, "contact", client);
  }

  public listItems(
    params?: ContactListItemsParams
  ): ClientResponse<Customer.ContactResponseList> {
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
  ): ClientResponse<Customer.ContactResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
