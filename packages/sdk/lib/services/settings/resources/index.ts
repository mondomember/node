import { ClientInstance } from "../../../client/interfaces";
import { SettingsEndpoints } from "./endpoints";

export * from "./endpoints";
export * from "./properties";
export * from "./app";

const SettingsResources = (client: ClientInstance) =>
  new SettingsEndpoints(client);

export { SettingsResources };
