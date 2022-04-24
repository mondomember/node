import { ClientInstance } from "../../../client";
import { SettingsEndpoints } from "./endpoints";

export * from "./endpoints";
export * from "./properties";

const SettingsResources = (client: ClientInstance) =>
  new SettingsEndpoints(client);

export { SettingsResources };
