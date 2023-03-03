import { ClientInstance } from "../../../client/interfaces";
import { IntegrationEndpoints } from "./endpoints";

export * from "./endpoints";
export * from "./app";
export * from "./workspace";
export * from "./public";

const IntegrationResources = (client: ClientInstance) =>
  new IntegrationEndpoints(client);

export { IntegrationResources };
