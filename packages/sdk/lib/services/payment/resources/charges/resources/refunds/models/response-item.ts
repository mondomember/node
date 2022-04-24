import { JsonSchemaType } from "../../../../../../../schema";
import {
  StripeRefundResponseItemSchema,
  StripeRefundResponseItemInterface,
} from "./providers/stripe/response-item";

export const RefundResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [StripeRefundResponseItemSchema],
};

export type RefundResponseItemInterface = StripeRefundResponseItemInterface;
