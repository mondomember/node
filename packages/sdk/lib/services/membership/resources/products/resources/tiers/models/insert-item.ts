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
    required: ["amount"],
    properties: {
      amount: {
        type: JsonSchemaType.NUMBER,
      },
    },
  },
};

interface PriceInterface {
  price: {
    amount: number;
  };
}

export const ProductTierInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["label", "price"],
  properties: {
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...PriceSchema,
    ...MetadataPropertySchema,
  },
};

export interface ProductTierInsertItemInterface
  extends LabelPropertyInterface,
    Partial<DescriptionPropertyInterface>,
    PriceInterface,
    Partial<MetadataPropertyInterface> {}
