import { ClientInstance } from "../../../client/interfaces";

import Apps from "./app/endpoints";
import Workspace from "./workspace/endpoints";
import Public from "./public/endpoints";

export class IntegrationEndpoints {
  readonly Apps: Apps;
  readonly Workspace: Workspace;
  readonly Public: Public;

  constructor(readonly client: ClientInstance) {
    this.Apps = new Apps(this.client);
    this.Workspace = new Workspace(this.client);
    this.Public = new Public(this.client);
  }
}
