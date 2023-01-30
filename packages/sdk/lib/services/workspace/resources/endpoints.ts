import { ClientInstance, ClientResponse } from "../../../client/interfaces";
import { Workspace } from "@mondomember/model";

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
  public getItem(): ClientResponse<Workspace.TenantResponseItem> {
    return this.client.get("/workspace");
  }

  /**
   * Update a item.
   *
   * @returns
   */
  public updateItem(
    payload: Workspace.TenantModifyItem
  ): ClientResponse<Workspace.TenantResponseItem> {
    return this.client.put("/workspace", payload);
  }

  /**
   * Delete an item.
   *
   * @returns
   */
  public deleteItem(): ClientResponse<Workspace.TenantResponseItem> {
    return this.client.delete("/workspace");
  }
}
