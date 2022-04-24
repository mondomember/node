import { JsonSchemaType } from "../../../../../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../../../models";

import {
  AmountPropertySchema,
  AmountPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
  DefaultPropertySchema,
  DefaultPropertyInterface,
} from "./base";

export const ProductTierPriceInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["amount"],
  properties: {
    ...AmountPropertySchema,
    ...DescriptionPropertySchema,
    ...DefaultPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface ProductTierPriceInsertItemInterface
  extends AmountPropertyInterface,
    Partial<DescriptionPropertyInterface>,
    Partial<DefaultPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
