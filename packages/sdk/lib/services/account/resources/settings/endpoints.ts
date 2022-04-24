import { ClientInstance, ClientResponse } from "../../../../client";

import { SettingsResponseItemInterface } from "./models";

export default class SettingsEndpoints {
  constructor(readonly client: ClientInstance) {}

  /**
   * Get a item.
   *
   * @returns
   */
  public getItem(): ClientResponse<SettingsResponseItemInterface> {
    return this.client.get("/account/settings");
  }
}
