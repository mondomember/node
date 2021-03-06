import { ClientInstance } from "../../../client/interfaces";
import { BillingEndpoints } from "./endpoints";

export * from "./endpoints";

export * from "./invoices";

const BillingResources = (client: ClientInstance) =>
  new BillingEndpoints(client);

export { BillingResources };
