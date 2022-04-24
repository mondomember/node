import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";

import {
  LabelPropertySchema,
  LabelPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
} from "./base";

export const ProductModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface ProductModifyItemInterface
  extends Partial<LabelPropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
