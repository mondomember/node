import { ClientInstance } from "../../../client/interfaces";
import { WorkspaceEndpoints } from "./endpoints";

export * from "./endpoints";

export * from "./notifications";
export * from "./preferences";
export * from "./users";

const WorkspaceResources = (client: ClientInstance) =>
  new WorkspaceEndpoints(client);

export { WorkspaceResources };
