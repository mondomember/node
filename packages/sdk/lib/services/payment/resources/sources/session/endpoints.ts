import {
  ClientInstance,
  ClientResponse,
} from "../../../../../client/interfaces";
import { Payment } from "@mondomember/model";

const PATH = {
  base: "payment/sources/session",
};

export default class {
  constructor(readonly client: ClientInstance) {}

  public createItem(
    payload: Payment.SourceSessionInsertItem
  ): ClientResponse<Payment.SourceSessionResponseItem> {
    return this.client.post(PATH.base, payload);
  }
}
