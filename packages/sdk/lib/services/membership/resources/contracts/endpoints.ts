import { parseTemplate } from "../../../../client/url-template";
import { PaginationParams } from "../../../../models";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import {
  ContractInsertItemInterface,
  ContractModifyItemInterface,
  ContractResponseItemInterface,
  ContractResponseListInterface,
} from "./models";

import { ContractFilter } from "./interfaces";

const PATH = {
  base: "membership/contracts",
  item: "membership/contracts/{contract}",
};

type Expressions = {
  contract: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
  filter?: ContractFilter;
};

export default class extends CRUDEndpoints<
  Expressions,
  ContractInsertItemInterface,
  ContractModifyItemInterface,
  ContractResponseItemInterface
> {
  constructor(client: ClientInstance) {
    super(PATH, client);
  }

  public listItems(
    params?: ListItemsParams
  ): ClientResponse<ContractResponseListInterface> {
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
  ): ClientResponse<ContractResponseItemInterface> {
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
  ): ClientResponse<ContractResponseItemInterface> {
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
  ): ClientResponse<ContractResponseItemInterface> {
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
  ): ClientResponse<ContractResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${PATH.item}/cancel`).expand(expression)
    );
  }
}
