import Charges from "./charges/endpoints";
import Gateways from "./gateways/endpoints";
import Sources from "./sources/endpoints";

import { ClientInstance } from "../../../client/interfaces";

export class PaymentEndpoints {
  readonly Charges: Charges;
  readonly Gateways: Gateways;
  readonly Sources: Sources;

  constructor(readonly client: ClientInstance) {
    this.Charges = new Charges(this.client);
    this.Gateways = new Gateways(this.client);
    this.Sources = new Sources(this.client);
  }
}
