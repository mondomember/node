import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { ChargeListItemsParams } from "./interfaces";
import { Payment } from "@mondomember/model";

import Session from "./resources/session/endpoints";

const PATH = {
  base: "payment/charges",
  item: "payment/charges/{charge}",
};

type Expressions = {
  charge: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  Payment.ChargeInsertItem,
  Payment.ChargeModifyItem,
  Payment.ChargeResponseItem
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
  ): ClientResponse<Payment.ChargeResponseList> {
    return this.client.get(PATH.base, { params });
  }
}
