import { ClientResponse } from "../../client/interfaces";
import { BaseEndpoints } from "./base";

export abstract class CRUDEndpoints<
  Expressions extends {},
  CreatePayload,
  UpdatePayload,
  ItemResponse,
  GetItemParams extends {} = {}
> extends BaseEndpoints<
  Expressions,
  UpdatePayload,
  ItemResponse,
  GetItemParams
> {
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
