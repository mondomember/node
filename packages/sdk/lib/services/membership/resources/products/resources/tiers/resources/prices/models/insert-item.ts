import { JsonSchemaType } from "../../../../../../../../../schema";
import { MetadataPropertySchema } from "../../../../../../../../../models";

import {
  AmountPropertySchema,
  DescriptionPropertySchema,
  DefaultPropertySchema,
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
