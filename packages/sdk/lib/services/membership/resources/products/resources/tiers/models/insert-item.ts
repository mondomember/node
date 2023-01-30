import { JsonSchemaType } from "../../../../../../../schema";
import { MetadataPropertySchema } from "../../../../../../../models";

import { LabelPropertySchema, DescriptionPropertySchema } from "./base";

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
