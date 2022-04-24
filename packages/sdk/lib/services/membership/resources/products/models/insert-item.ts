import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";

import {
  LabelPropertySchema,
  LabelPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
} from "./base";

export const ProductInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["label"],
  properties: {
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...MetadataPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface ProductInsertItemInterface
  extends LabelPropertyInterface,
    Partial<DescriptionPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
