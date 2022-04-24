import { JsonSchemaType } from "../../../../../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../../../models";

import {
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
} from "./base";

export const ProductTierPriceModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...DescriptionPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface ProductTierPriceModifyItemInterface
  extends Partial<DescriptionPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
