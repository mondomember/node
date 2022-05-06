import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import {
  IdentityResponseItemInterface,
  IdentityModifyItemInterface,
} from "./models";
import Workspaces from "./resources/workspace/endpoints";

export default class IdentityEndpoints {
  readonly Workspaces: Workspaces;

  constructor(readonly client: ClientInstance) {
    this.Workspaces = new Workspaces(this.client);
  }

  /**
   * Get a item.
   */
  public getItem(): ClientResponse<IdentityResponseItemInterface> {
    return this.client.get("/account/identity");
  }

  /**
   * Update a item.
   */
  public updateItem(
    payload: IdentityModifyItemInterface
  ): ClientResponse<IdentityResponseItemInterface> {
    return this.client.put("/account/identity", payload);
  }
}
