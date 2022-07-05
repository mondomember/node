import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";

export const RefundModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...MetadataPropertySchema,
  },
};

export interface RefundModifyItemInterface
  extends Partial<MetadataPropertyInterface> {}
