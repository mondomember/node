import { JsonSchemaType } from "../../../../../schema";
import {
  IdPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";
import {
  AmountPropertySchema,
  AmountPropertyInterface,
  RefundIdPropertySchema,
  ChargePropertySchema,
  ChargePropertyInterface,
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

export interface RefundInsertItemInterface
  extends ChargePropertyInterface,
    Partial<IdPropertyInterface>,
    Partial<AmountPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
