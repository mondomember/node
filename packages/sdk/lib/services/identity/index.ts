import { ClientInstance } from "../../client/interfaces";
import { IdentityEndpoints } from "./endpoints";

export * from "./endpoints";
export * from "./models";
export * from "./resources";

const IdentityResources = (client: ClientInstance) =>
  new IdentityEndpoints(client);

export { IdentityResources };
