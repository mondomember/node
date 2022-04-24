import { ClientInstance } from "../../../client";
import { PaymentEndpoints } from "./endpoints";

export * from "./endpoints";

export * from "./charges";
export * from "./gateways";
export * from "./sources";

const PaymentResources = (client: ClientInstance) =>
  new PaymentEndpoints(client);

export { PaymentResources };
