import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import { Settings } from "@mondomember/model";

export default class SettingsEndpoints {
  constructor(readonly client: ClientInstance) {}

  /**
   * Get settings.
   *
   * @returns
   */
  public getItem(): ClientResponse<Settings.AppResponseItem> {
    return this.client.get("/settings/app");
  }

  /**
   * Upsert settings.
   *
   * @returns
   */
  public upsertItem(
    payload: Settings.AppUpsertItem
  ): ClientResponse<Settings.AppResponseItem> {
    return this.client.put("/settings/app", payload);
  }
}
