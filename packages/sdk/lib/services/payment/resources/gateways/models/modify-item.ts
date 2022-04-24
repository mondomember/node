import { JsonSchemaType } from "../../../../../schema";
import {
  StripeGatewayModifyItemSchema,
  StripeGatewayModifyItemInterface,
} from "./providers/stripe/modify-item";

export const GatewayModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [StripeGatewayModifyItemSchema],
};

export type GatewayModifyItemInterface = StripeGatewayModifyItemInterface;
