import { ClientInstance } from "../../../client/interfaces";

import ServerSide from "./server-side/endpoints";
import Public from "./public/endpoints";

export class IntegrationEndpoints {
  readonly ServerSide: ServerSide;
  readonly Public: Public;

  constructor(readonly client: ClientInstance) {
    this.ServerSide = new ServerSide(this.client);
    this.Public = new Public(this.client);
  }
}
