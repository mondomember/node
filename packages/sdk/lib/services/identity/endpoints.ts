import { ClientInstance, ClientResponse } from "../../client/interfaces";
import { Identity } from "@mondomember/model";

import Workspaces from "./resources/workspace/endpoints";

export class IdentityEndpoints {
  readonly Workspaces: Workspaces;

  constructor(readonly client: ClientInstance) {
    this.Workspaces = new Workspaces(this.client);
  }

  /**
   * Get a item.
   */
  public getItem(): ClientResponse<Identity.IdentityResponseItem> {
    return this.client.get("/identity");
  }

  /**
   * Update a item.
   */
  public updateItem(
    payload: Identity.IdentityModifyItem
  ): ClientResponse<Identity.IdentityResponseItem> {
    return this.client.put("/identity", payload);
  }
}
