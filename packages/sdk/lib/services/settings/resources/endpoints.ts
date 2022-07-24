import App from "./app/endpoints";
import Properties from "./properties/endpoints";

import { ClientInstance } from "../../../client/interfaces";

export class SettingsEndpoints {
  readonly App: App;
  readonly Properties: Properties;

  constructor(readonly client: ClientInstance) {
    this.App = new App(this.client);
    this.Properties = new Properties(this.client);
  }
}
