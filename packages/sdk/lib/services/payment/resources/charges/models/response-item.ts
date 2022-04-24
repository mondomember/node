import { JsonSchemaType } from "../../../../../schema";
import {
  StripeChargeResponseItemSchema,
  StripeChargeResponseItemInterface,
} from "./providers/stripe/response-item";

export const ChargeResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [StripeChargeResponseItemSchema],
};

export type ChargeResponseItemInterface = StripeChargeResponseItemInterface;
