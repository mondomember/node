import {
  ClientInstance,
  ClientResponse,
} from "../../../../../../client/interfaces";
import {
  ChargeSessionInsertItemInterface,
  ChargeSessionResponseItemInterface,
} from "./models";

const PATH = {
  base: "payment/charges/session",
};

export default class {
  constructor(readonly client: ClientInstance) {}

  public createItem(
    payload: ChargeSessionInsertItemInterface
  ): ClientResponse<ChargeSessionResponseItemInterface> {
    return this.client.post(PATH.base, payload);
  }
}
