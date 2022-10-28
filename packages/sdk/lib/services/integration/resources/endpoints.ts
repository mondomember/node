import { ClientInstance } from "../../../client/interfaces";

import Workspace from "./workspace/endpoints";
import Public from "./public/endpoints";

export class IntegrationEndpoints {
  readonly Workspace: Workspace;
  readonly Public: Public;

  constructor(readonly client: ClientInstance) {
    this.Workspace = new Workspace(this.client);
    this.Public = new Public(this.client);
  }
}
