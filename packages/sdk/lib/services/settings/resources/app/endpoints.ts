import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import {
  AppSettingsResponseItemInterface,
  AppSettingsUpsertItemInterface,
} from "./models";

export default class SettingsEndpoints {
  constructor(readonly client: ClientInstance) {}

  /**
   * Get settings.
   *
   * @returns
   */
  public getItem(): ClientResponse<AppSettingsResponseItemInterface> {
    return this.client.get("/settings/app");
  }

  /**
   * Upsert settings.
   *
   * @returns
   */
  public upsertItem(
    payload: AppSettingsUpsertItemInterface
  ): ClientResponse<AppSettingsResponseItemInterface> {
    return this.client.put("/settings/app", payload);
  }
}
