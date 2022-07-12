import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
  ExternalIdPropertySchema,
  ExternalIdsPropertyInterface,
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
    ...ExternalIdPropertySchema,
  },
};

export interface ProductInsertItemInterface
  extends LabelPropertyInterface,
    Partial<DescriptionPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<ExternalIdsPropertyInterface> {}
