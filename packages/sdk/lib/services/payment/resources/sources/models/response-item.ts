import { JsonSchemaType } from "../../../../../schema";
import {
  StripeSourceResponseItemSchema,
  StripeSourceResponseItemInterface,
} from "./providers/stripe/response-item";

export const SourceResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [StripeSourceResponseItemSchema],
};

export type SourceResponseItemInterface = StripeSourceResponseItemInterface;
