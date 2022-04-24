import { ClientInstance } from "../../../client";
import { IntegrationEndpoints } from "./endpoints";

export * from "./endpoints";
export * from "./server-side";
export * from "./public";

const IntegrationResources = (client: ClientInstance) =>
  new IntegrationEndpoints(client);

export { IntegrationResources };
