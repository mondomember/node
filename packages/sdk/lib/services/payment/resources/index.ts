import { ClientInstance } from "../../../client/interfaces";
import { PaymentEndpoints } from "./endpoints";

export * from "./endpoints";

export * from "./charges";
export * from "./gateways";
export * from "./sources";
export * from "./refunds";

const PaymentResources = (client: ClientInstance) =>
  new PaymentEndpoints(client);

export { PaymentResources };
