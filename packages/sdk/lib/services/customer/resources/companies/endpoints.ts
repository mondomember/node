import { parseTemplate } from "../../../../client/url-template";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { ExternalIdEndpoints } from "../../../../shared/external-id/endpoints";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CompanyListItemsParams } from "./interfaces";
import { Customer } from "@mondomember/model";

const PATH = {
  base: "customer/companies",
  item: "customer/companies/{company}",
};

type Expressions = {
  company: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  Customer.CompanyInsertItem,
  Customer.CompanyModifyItem,
  Customer.CompanyResponseItem
> {
  readonly External: ExternalIdEndpoints<
    Customer.CompanyResponseItem,
    "company"
  >;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.External = new ExternalIdEndpoints(this.path.base, "company", client);
  }

  public listItems(
    params?: CompanyListItemsParams
  ): ClientResponse<Customer.CompanyResponseList> {
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
  ): ClientResponse<Customer.CompanyResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }
}
