import { JsonSchemaType } from "../../../../../schema";
import {
  StripeGatewayResponseItemSchema,
  StripeGatewayResponseItemInterface,
} from "./providers/stripe/response-item";

export const GatewayResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [StripeGatewayResponseItemSchema],
};

export type GatewayResponseItemInterface = StripeGatewayResponseItemInterface;
