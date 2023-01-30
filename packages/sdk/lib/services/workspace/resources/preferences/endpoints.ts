import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import { Workspace } from "@mondomember/model";

const PATH = {
  base: "workspace/preferences",
};

export default class {
  constructor(readonly client: ClientInstance) {}

  /**
   * Get item.
   *
   * @returns
   */
  public getItem(): ClientResponse<Workspace.PreferencesResponseItem> {
    return this.client.get(PATH.base);
  }

  /**
   * Create a new item.
   *
   * @param payload
   * @returns
   */
  public upsertItem(
    payload: Workspace.PreferencesUpsertItem
  ): ClientResponse<Workspace.PreferencesResponseItem> {
    return this.client.put(PATH.base, payload);
  }
}
