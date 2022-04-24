import { JsonSchemaType } from "../../../../../../../schema";
import {
  IdPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../models";
import {
  AmountPropertySchema,
  AmountPropertyInterface,
  RefundIdPropertySchema,
} from "./base";

export const RefundInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...RefundIdPropertySchema,
    ...AmountPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface RefundInsertItemInterface
  extends Partial<IdPropertyInterface>,
    Partial<AmountPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
