import { JsonSchemaType } from "../../../../../schema";
import {
  StripeSourceModifyItemSchema,
  StripeSourceModifyItemInterface,
} from "./providers/stripe/modify-item";

export const SourceModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [StripeSourceModifyItemSchema],
};

export type SourceModifyItemInterface = StripeSourceModifyItemInterface;
