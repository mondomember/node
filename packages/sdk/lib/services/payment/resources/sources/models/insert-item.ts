import { JsonSchemaType } from "../../../../../schema";
import {
  StripeSourceInsertItemSchema,
  StripeSourceInsertItemInterface,
} from "./providers/stripe/insert-item";

export const SourceInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [StripeSourceInsertItemSchema],
};

export type SourceInsertItemInterface = StripeSourceInsertItemInterface;
