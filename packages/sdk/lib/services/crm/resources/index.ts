import { ClientInstance } from "../../../client";
import { CRMEndpoints } from "./endpoints";

export * from "./endpoints";

export * from "./companies";
export * from "./contacts";
export * from "./company-contacts";

const CRMResources = (client: ClientInstance) => new CRMEndpoints(client);

export { CRMResources };
