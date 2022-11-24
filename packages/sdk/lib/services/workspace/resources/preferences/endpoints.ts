import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import {
  PreferencesUpsertItemInterface,
  PreferencesResponseItemInterface,
} from "./models";

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
  public getItem(): ClientResponse<PreferencesResponseItemInterface> {
    return this.client.get(PATH.base);
  }

  /**
   * Create a new item.
   *
   * @param payload
   * @returns
   */
  public upsertItem(
    payload: PreferencesUpsertItemInterface
  ): ClientResponse<PreferencesResponseItemInterface> {
    return this.client.put(PATH.base, payload);
  }
}
