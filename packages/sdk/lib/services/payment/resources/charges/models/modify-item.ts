import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";

export const ChargeModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...MetadataPropertySchema,
  },
};

export interface ChargeModifyItemInterface
  extends Partial<MetadataPropertyInterface> {}
