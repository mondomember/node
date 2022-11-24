import { ClientInstance, ClientResponse } from "../../../client/interfaces";
import {
  TenantResponseItemInterface,
  TenantModifyItemInterface,
} from "../models";

import Notifications from "./notifications/endpoints";
import Preferences from "./preferences/endpoints";
import Users from "./users/endpoints";

export class WorkspaceEndpoints {
  readonly Notifications: Notifications;
  readonly Preferences: Preferences;
  readonly Users: Users;

  constructor(readonly client: ClientInstance) {
    this.Notifications = new Notifications(this.client);
    this.Preferences = new Preferences(this.client);
    this.Users = new Users(this.client);
  }

  /**
   * Get a item.
   *
   * @returns
   */
  public getItem(): ClientResponse<TenantResponseItemInterface> {
    return this.client.get("/workspace");
  }

  /**
   * Update a item.
   *
   * @returns
   */
  public updateItem(
    payload: TenantModifyItemInterface
  ): ClientResponse<TenantResponseItemInterface> {
    return this.client.put("/workspace", payload);
  }

  /**
   * Delete an item.
   *
   * @returns
   */
  public deleteItem(): ClientResponse<TenantResponseItemInterface> {
    return this.client.delete("/workspace");
  }
}
