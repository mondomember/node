import { ClientInstance } from "../../../client";
import { MembershipEndpoints } from "./endpoints";

export * from "./endpoints";

export * from "./contracts";
export * from "./memberships";
export * from "./products";

const MembershipResources = (client: ClientInstance) =>
  new MembershipEndpoints(client);

export { MembershipResources };
