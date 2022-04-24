import { JsonSchemaType } from "../../../../../schema";
import {
  StripeGatewayInsertItemSchema,
  StripeGatewayInsertItemInterface,
} from "./providers/stripe/insert-item";

export const GatewayInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [StripeGatewayInsertItemSchema],
};

export type GatewayInsertItemInterface = StripeGatewayInsertItemInterface;
