import Invoices from "./invoices/endpoints";

import { ClientInstance } from "../../../client";

export class BillingEndpoints {
  readonly Invoices: Invoices;

  constructor(readonly client: ClientInstance) {
    this.Invoices = new Invoices(this.client);
  }
}
