import { ClientInstance } from "../../../client/interfaces";
import { WebhookEndpoints } from "./endpoints";

export * from "./endpoints";
export * from "./subscriptions";

const WebhookResources = (client: ClientInstance) =>
  new WebhookEndpoints(client);

export { WebhookResources };
