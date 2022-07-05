import { PaginationParams } from "../../../../models";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import {
  ChargeInsertItemInterface,
  ChargeModifyItemInterface,
  ChargeResponseItemInterface,
  ChargeResponseListInterface,
} from "./models";

import { ChargeFilter } from "./interfaces";

import Session from "./resources/session/endpoints";

const PATH = {
  base: "payment/charges",
  item: "payment/charges/{charge}",
};

type Expressions = {
  charge: string;
};

export type ChargeListItemsParams = {
  pagination: PaginationParams;
  filter?: ChargeFilter;
};

export default class extends CRUDEndpoints<
  Expressions,
  ChargeInsertItemInterface,
  ChargeModifyItemInterface,
  ChargeResponseItemInterface
> {
  readonly Session: Session;

  constructor(client: ClientInstance) {
    super(PATH, client);

    this.Session = new Session(this.client);
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    params?: ChargeListItemsParams
  ): ClientResponse<ChargeResponseListInterface> {
    return this.client.get(PATH.base, { params });
  }
}
