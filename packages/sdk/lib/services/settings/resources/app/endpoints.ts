import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import { AppSettingsResponseItemInterface } from "./models";

export default class SettingsEndpoints {
  constructor(readonly client: ClientInstance) {}

  /**
   * Get a item.
   *
   * @returns
   */
  public getItem(): ClientResponse<AppSettingsResponseItemInterface> {
    return this.client.get("/settings/app");
  }
}
