import { JsonSchemaType } from "../../../../../../../../../schema";
import { MetadataPropertySchema } from "../../../../../../../../../models";

import { DescriptionPropertySchema } from "./base";

export const ProductTierPriceModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...DescriptionPropertySchema,
    ...MetadataPropertySchema,
  },
};
