import Charges from "./charges/endpoints";
import Gateways from "./gateways/endpoints";
import Sources from "./sources/endpoints";
import Refunds from "./refunds/endpoints";

import { ClientInstance } from "../../../client/interfaces";

export class PaymentEndpoints {
  readonly Charges: Charges;
  readonly Gateways: Gateways;
  readonly Sources: Sources;
  readonly Refunds: Refunds;

  constructor(readonly client: ClientInstance) {
    this.Charges = new Charges(this.client);
    this.Gateways = new Gateways(this.client);
    this.Sources = new Sources(this.client);
    this.Refunds = new Refunds(this.client);
  }
}
