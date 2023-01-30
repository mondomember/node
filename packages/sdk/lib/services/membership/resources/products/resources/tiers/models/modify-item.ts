import { JsonSchemaType } from "../../../../../../../schema";
import { MetadataPropertySchema } from "../../../../../../../models";

import { LabelPropertySchema, DescriptionPropertySchema } from "./base";

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
