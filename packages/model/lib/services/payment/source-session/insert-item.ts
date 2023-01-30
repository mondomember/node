import { CustomerPropertyRequest } from "../../customer";
import { GatewayProperty } from "../source/base";

export interface SourceSessionInsertItem
  extends CustomerPropertyRequest,
    GatewayProperty {
  options?: Record<string, string>;
}
