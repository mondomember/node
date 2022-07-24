import Workspace from "./workspace/endpoints";
import Identity from "./identity/endpoints";

import { ClientInstance } from "../../../client/interfaces";

export class AccountEndpoints {
  readonly Identity: Identity;
  readonly Workspace: Workspace;

  constructor(readonly client: ClientInstance) {
    this.Identity = new Identity(this.client);
    this.Workspace = new Workspace(this.client);
  }
}
