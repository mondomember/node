import { JsonSchemaType } from "../../../../../schema";
import { MetadataPropertySchema } from "../../../../../models";

import { LabelPropertySchema, DescriptionPropertySchema } from "./base";

export const ProductModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...MetadataPropertySchema,
  },
};
