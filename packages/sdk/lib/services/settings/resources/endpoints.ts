import Properties from "./properties/endpoints";

import { ClientInstance } from "../../../client/interfaces";

export class SettingsEndpoints {
  readonly Properties: Properties;

  constructor(readonly client: ClientInstance) {
    this.Properties = new Properties(this.client);
  }
}
