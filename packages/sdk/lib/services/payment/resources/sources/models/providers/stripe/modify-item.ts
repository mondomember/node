import { JsonSchemaType } from "../../../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../models";
import { LabelSchema, LabelInterface } from "../../base";

export const StripeSourceModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...LabelSchema,
    ...MetadataPropertySchema,
  },
};

export interface StripeSourceModifyItemInterface
  extends Partial<LabelInterface>,
    Partial<MetadataPropertyInterface> {}
