import {
  ClientInstance,
  ClientResponse,
} from "../../../../../client/interfaces";
import {
  SourceSessionInsertItemInterface,
  SourceSessionResponseItemInterface,
} from "./models";

const PATH = {
  base: "payment/sources/session",
};

export default class {
  constructor(readonly client: ClientInstance) {}

  public createItem(
    payload: SourceSessionInsertItemInterface
  ): ClientResponse<SourceSessionResponseItemInterface> {
    return this.client.post(PATH.base, payload);
  }
}
