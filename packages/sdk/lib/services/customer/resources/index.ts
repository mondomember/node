import { ClientInstance } from "../../../client/interfaces";
import { CustomerEndpoints } from "./endpoints";

export * from "./endpoints";

export * from "./companies";
export * from "./contacts";
export * from "./company-contacts";

const CustomerResources = (client: ClientInstance) =>
  new CustomerEndpoints(client);

export { CustomerResources };
