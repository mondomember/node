import {
  ClientInstance,
  ClientResponse,
} from "../../../../../../client/interfaces";

import {
  WorkspacePreferencesUpsertItemInterface,
  WorkspacePreferencesResponseItemInterface,
} from "./models";

const PATH = {
  base: "account/workspace/preferences",
};

export default class {
  constructor(readonly client: ClientInstance) {}

  /**
   * Get item.
   *
   * @returns
   */
  public getItem(): ClientResponse<WorkspacePreferencesResponseItemInterface> {
    return this.client.get(PATH.base);
  }

  /**
   * Create a new item.
   *
   * @param payload
   * @returns
   */
  public upsertItem(
    payload: WorkspacePreferencesUpsertItemInterface
  ): ClientResponse<WorkspacePreferencesResponseItemInterface> {
    return this.client.put(PATH.base, payload);
  }
}
