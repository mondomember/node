import { ClientInstance } from "../../../client";
import { ImportEndpoints } from "./endpoints";

export * from "./endpoints";

export * from "./jobs";
export * from "./upload";

const ImportResources = (client: ClientInstance) => new ImportEndpoints(client);

export { ImportResources };
