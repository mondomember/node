import { ClientInstance } from "../../../client";
import { AccountEndpoints } from "./endpoints";

export * from "./endpoints";

export * from "./identity";
export * from "./settings";
export * from "./workspace";

const AccountResources = (client: ClientInstance) =>
  new AccountEndpoints(client);

export { AccountResources };
