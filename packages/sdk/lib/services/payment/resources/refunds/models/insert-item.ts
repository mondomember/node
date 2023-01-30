import { JsonSchemaType } from "../../../../../schema";
import { MetadataPropertySchema } from "../../../../../models";
import {
  AmountPropertySchema,
  RefundIdPropertySchema,
  ChargePropertySchema,
} from "./base";

export const RefundInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["charge"],
  properties: {
    ...RefundIdPropertySchema,
    ...ChargePropertySchema,
    ...AmountPropertySchema,
    ...MetadataPropertySchema,
  },
};
