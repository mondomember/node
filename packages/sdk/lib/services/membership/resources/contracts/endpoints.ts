import { parseTemplate } from "../../../../client/url-template";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { ExternalIdEndpoints } from "../../../../shared/external-id/endpoints";

import { Membership } from "@mondomember/model";

import { ContractListItemsParams } from "./interfaces";

const PATH = {
  base: "membership/contracts",
  item: "membership/contracts/{contract}",
};

type Expressions = {
  contract: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  Membership.ContractInsertItem,
  Membership.ContractModifyItem,
  Membership.ContractResponseItem
> {
  readonly External: ExternalIdEndpoints<
    Membership.ContractResponseItem,
    "contract"
  >;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.External = new ExternalIdEndpoints(this.path.base, "contract", client);
  }

  public listItems(
    params?: ContractListItemsParams
  ): ClientResponse<Membership.ContractResponseList> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Restore a previously deleted item.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: Expressions
  ): ClientResponse<Membership.ContractResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/restore`).expand(expression)
    );
  }

  /**
   * Finalize a contract, ready for customer action
   *
   * @param expression
   * @returns
   */
  public finalizeItem(
    expression: Expressions
  ): ClientResponse<Membership.ContractResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/finalize`).expand(expression)
    );
  }

  /**
   * Approve a contract, transitioning it into a calculated workflow
   *
   * @param expression
   * @returns
   */
  public approveItem(
    expression: Expressions
  ): ClientResponse<Membership.ContractResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/approve`).expand(expression)
    );
  }

  /**
   * Cancel a contract
   *
   * @param expression
   * @returns
   */
  public cancelItem(
    expression: Expressions
  ): ClientResponse<Membership.ContractResponseItem> {
    return this.client.post(
      parseTemplate(`${PATH.item}/cancel`).expand(expression)
    );
  }
}
