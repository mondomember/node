import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import {
  WorkspaceTenantResponseItemInterface,
  WorkspaceTenantModifyItemInterface,
} from "./models";

import Notifications from "./resources/notifications/endpoints";
import Preferences from "./resources/preferences/endpoints";
import Users from "./resources/users/endpoints";

export default class WorkspaceEndpoints {
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
  public getItem(): ClientResponse<WorkspaceTenantResponseItemInterface> {
    return this.client.get("/account/workspace");
  }

  /**
   * Update a item.
   *
   * @returns
   */
  public updateItem(
    payload: WorkspaceTenantModifyItemInterface
  ): ClientResponse<WorkspaceTenantResponseItemInterface> {
    return this.client.put("/account/workspace", payload);
  }

  /**
   * Delete an item.
   *
   * @returns
   */
  public deleteItem(): ClientResponse<WorkspaceTenantResponseItemInterface> {
    return this.client.delete("/account/workspace");
  }
}
