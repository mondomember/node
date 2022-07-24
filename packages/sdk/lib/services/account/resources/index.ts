import { ClientInstance } from "../../../client/interfaces";
import { AccountEndpoints } from "./endpoints";

export * from "./endpoints";

export * from "./identity";
export * from "./workspace";

const AccountResources = (client: ClientInstance) =>
  new AccountEndpoints(client);

export { AccountResources };
