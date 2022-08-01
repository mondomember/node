import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { ExternalIdEndpoints } from "../../../../shared/external-id/endpoints";
import { parseTemplate } from "../../../../client/url-template";

import {
  ContactInsertItemInterface,
  ContactModifyItemInterface,
  ContactResponseItemInterface,
  ContactResponseListInterface,
} from "./models";
import { ContactListItemsParams } from "./interfaces";

const PATH = {
  base: "crm/contacts",
  item: "crm/contacts/{contact}",
};

type Expressions = {
  contact: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  ContactInsertItemInterface,
  ContactModifyItemInterface,
  ContactResponseItemInterface
> {
  readonly External: ExternalIdEndpoints<
    ContactResponseItemInterface,
    "contact"
  >;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.External = new ExternalIdEndpoints(this.path.base, "contact", client);
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
