import { parseTemplate } from "../../../../client/url-template";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { ExternalIdEndpoints } from "../../../../shared/external-id";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import {
  CompanyInsertItemInterface,
  CompanyModifyItemInterface,
  CompanyResponseItemInterface,
  CompanyResponseListInterface,
} from "./models";
import { CompanyListItemsParams } from "./interfaces";
const PATH = {
  base: "crm/companies",
  item: "crm/companies/{company}",
};

type Expressions = {
  company: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  CompanyInsertItemInterface,
  CompanyModifyItemInterface,
  CompanyResponseItemInterface
> {
  readonly External: ExternalIdEndpoints<
    CompanyResponseItemInterface,
    "company"
  >;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.External = new ExternalIdEndpoints(this.path.base, "company", client);
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
