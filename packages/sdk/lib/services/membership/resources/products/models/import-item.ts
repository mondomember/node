import { JsonSchemaType } from "../../../../../schema";

import { ProductInsertItemSchema } from "./insert-item";
import { ProductModifyItemSchema } from "./modify-item";

const AnyIdPropertySchema = {
  id: {
    type: JsonSchemaType.STRING,
  },
};

export const ProductImportInsertItemSchema = {
  ...ProductInsertItemSchema,
  additionalProperties: true,
  properties: {
    ...ProductInsertItemSchema.properties,
    ...AnyIdPropertySchema,
    default: {
      type: JsonSchemaType.BOOLEAN,
    },
  },
};

export const ProductImportModifyItemSchema = {
  ...ProductModifyItemSchema,
  additionalProperties: true,
  required: ["id"],
  properties: {
    ...ProductModifyItemSchema.properties,
    ...AnyIdPropertySchema,
    default: {
      type: JsonSchemaType.BOOLEAN,
    },
  },
};

export const ProductImportItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  oneOf: [ProductImportInsertItemSchema, ProductImportModifyItemSchema],
};
