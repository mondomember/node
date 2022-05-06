import { ClientResponse } from "../../client/interfaces";
import { BaseEndpoints } from "./base";

export abstract class CRUDEndpoints<
  Expressions extends {},
  CreatePayload,
  UpdatePayload,
  ItemResponse
> extends BaseEndpoints<Expressions, UpdatePayload, ItemResponse> {
  /**
   * Create a new item.
   *
   * @param payload
   * @returns
   */
  public createItem(payload: CreatePayload): ClientResponse<ItemResponse> {
    return this.client.post(this.path.base, payload);
  }
}
