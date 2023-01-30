import {
  ClientInstance,
  ClientResponse,
} from "../../../../../../client/interfaces";

import { Payment } from "@mondomember/model";

const PATH = {
  base: "payment/charges/session",
};

export default class {
  constructor(readonly client: ClientInstance) {}

  public createItem(
    payload: Payment.ChargeSessionInsertItem
  ): ClientResponse<Payment.ChargeSessionResponseItem> {
    return this.client.post(PATH.base, payload);
  }
}
