import Properties from "./properties/endpoints";

import { ClientInstance } from "../../../client";

export class SettingsEndpoints {
  readonly Properties: Properties;

  constructor(readonly client: ClientInstance) {
    this.Properties = new Properties(this.client);
  }
}
