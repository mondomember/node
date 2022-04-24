import Workspace from "./workspace/endpoints";
import Identity from "./identity/endpoints";
import Settings from "./settings/endpoints";

import { ClientInstance } from "../../../client";

export class AccountEndpoints {
  readonly Identity: Identity;
  readonly Workspace: Workspace;
  readonly Settings: Settings;

  constructor(readonly client: ClientInstance) {
    this.Identity = new Identity(this.client);
    this.Workspace = new Workspace(this.client);
    this.Settings = new Settings(this.client);
  }
}
