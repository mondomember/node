import { ClientInstance } from "../../../client";

import Subscriptions from "./subscriptions/endpoints";

export class WebhookEndpoints {
  readonly Subscriptions: Subscriptions;

  constructor(readonly client: ClientInstance) {
    this.Subscriptions = new Subscriptions(this.client);
  }
}
