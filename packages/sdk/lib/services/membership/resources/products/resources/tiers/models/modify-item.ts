import { JsonSchemaType } from "../../../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../models";

import {
  LabelPropertySchema,
  LabelPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
} from "./base";

const PriceSchema = {
  price: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["version"],
    properties: {
      version: {
        type: JsonSchemaType.NUMBER,
      },
    },
  },
};

interface PriceInterface {
  price: {
    version: number;
  };
}

export const ProductTierModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...PriceSchema,
    ...MetadataPropertySchema,
  },
};

export interface ProductTierModifyItemInterface
  extends Partial<LabelPropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    Partial<PriceInterface>,
    Partial<MetadataPropertyInterface> {}
