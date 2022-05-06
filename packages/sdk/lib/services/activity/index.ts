import { ClientInstance } from "../../client/interfaces";
import { ActivityEndpoints } from "./endpoints";

export * from "./constants";
export * from "./endpoints";
export * from "./models";

const ActivityResources = (client: ClientInstance) =>
  new ActivityEndpoints(client);

export { ActivityResources };
