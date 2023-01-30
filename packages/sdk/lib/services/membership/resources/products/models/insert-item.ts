import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  ExternalIdPropertySchema,
} from "../../../../../models";

import { LabelPropertySchema, DescriptionPropertySchema } from "./base";

export const ProductInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["label"],
  properties: {
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...MetadataPropertySchema,
    ...MetadataPropertySchema,
    ...ExternalIdPropertySchema,
  },
};
