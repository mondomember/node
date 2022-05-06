import { ClientInstance } from "../../../client/interfaces";
import { SearchEndpoints } from "./endpoints";

export * from "./models";
export * from "./endpoints";

const SearchResources = (client: ClientInstance) => new SearchEndpoints(client);

export { SearchResources };
