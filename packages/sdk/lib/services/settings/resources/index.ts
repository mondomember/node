import { ClientInstance } from "../../../client/interfaces";
import { SettingsEndpoints } from "./endpoints";

export * from "./endpoints";
export * from "./properties";

const SettingsResources = (client: ClientInstance) =>
  new SettingsEndpoints(client);

export { SettingsResources };
